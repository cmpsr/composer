import { FirestoreDb } from '../db';
import { QueryCondition, QueryOrder, FirestoreConfig } from '../types';

const mockGet = jest.fn().mockImplementation(() => {
  return [
    {
      id: '1',
      data: () => {
        return { p: 'value', _deleted: false, _createdAt: '' };
      },
    },
  ];
});
const mockGetDoc = jest.fn().mockReturnValue({
  id: '1',
  data: () => {
    return {
      field1: 'value1',
      field2: 'value2',
      _deleted: false,
      _createdAt: '',
    };
  },
});
const mockSet = jest.fn();
const mockUpdate = jest.fn();
const mockDelete = jest.fn();
const mockWhere = jest.fn().mockImplementation(() => {
  return mockCollection();
});
const mockOrderBy = jest.fn().mockImplementation(() => {
  return mockCollection();
});
const mockLimit = jest.fn().mockImplementation(() => mockCollection());
const mockStartAt = jest.fn().mockImplementation(() => mockCollection());
const mockOnSnapshot = jest.fn().mockImplementation((callback) => {
  callback({
    docChanges: () => [mockGetDoc()],
  });
});

const mockDocument = jest.fn().mockImplementation(() => {
  return {
    set: mockSet,
    get: mockGetDoc,
    update: mockUpdate,
    delete: mockDelete,
  };
});

const mockCollection = jest.fn().mockImplementation(() => {
  return {
    where: mockWhere,
    get: mockGet,
    orderBy: mockOrderBy,
    startAt: mockStartAt,
    limit: mockLimit,
    doc: mockDocument,
    onSnapshot: mockOnSnapshot,
  };
});
jest.mock('@google-cloud/firestore', () => {
  const obj = {
    Firestore: jest.fn().mockImplementation(() => {
      return {
        collection: mockCollection,
      };
    }),
    FieldValue: {
      serverTimestamp: () => 'server_timestamp',
    },
  };
  return obj;
});

describe('FirestoreDb', () => {
  const config: FirestoreConfig = {
    projectId: 'projectId',
    credentials: {
      client_email: 'someone@server.com',
      private_key: 'private key',
    },
  };
  const collectionName = 'users';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize client with given config', () => {
    new FirestoreDb(config);
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const firestoreModule = require('@google-cloud/firestore');
    expect(firestoreModule.Firestore).toBeCalledTimes(1);
    expect(firestoreModule.Firestore).toBeCalledWith(config);
  });

  describe('getItem', () => {
    const id = '1';
    test('should access collection', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.getItem(id, collectionName);
      expect(mockCollection).toBeCalledWith(collectionName);
    });
    test('should access doc and get data', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.getItem(id, collectionName);
      expect(mockDocument).toBeCalledTimes(1);
      expect(mockDocument).toBeCalledWith(id);
      expect(mockGetDoc).toBeCalled();
    });
    test('should return undefined if no doc match id', async () => {
      mockGetDoc.mockReturnValueOnce(undefined);
      const firestoreDb = new FirestoreDb(config);
      const item = await firestoreDb.getItem(id, collectionName);
      expect(item).not.toBeDefined();
    });
    test('should return undefined if doc is marked as deleted', async () => {
      mockGetDoc.mockReturnValueOnce({
        ...mockGetDoc(),
        data: () => {
          return { _deleted: true };
        },
      });
      const firestoreDb = new FirestoreDb(config);
      const item = await firestoreDb.getItem(id, collectionName);
      expect(item).not.toBeDefined();
    });
    test('should return doc', async () => {
      const firestoreDb = new FirestoreDb(config);
      const item = await firestoreDb.getItem(id, collectionName);
      expect(item).toStrictEqual({
        id: '1',
        field1: 'value1',
        field2: 'value2',
      });
    });
  });

  describe('getData', () => {
    test('should access collection', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.getData(collectionName);
      expect(mockCollection).toBeCalledWith(collectionName);
    });
    test('should return flatten object', async () => {
      const firestoreDb = new FirestoreDb(config);
      const data = await firestoreDb.getData(collectionName);
      expect(data.length).toBe(1);
      expect(data[0]).toStrictEqual({ id: '1', p: 'value' });
    });
    test('should filter deleted items for empty conditions', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.getData(collectionName, { conditions: [] });
      expect(mockWhere).toBeCalledTimes(1);
      expect(mockWhere).toBeCalledWith('_deleted', '==', false);
    });
    test('should build where clauses for conditions', async () => {
      const conditions: QueryCondition[] = [
        {
          field: 'field',
          operator: '==',
          value: 'value',
        },
        {
          field: 'field1',
          operator: '<=',
          value: 'value1',
        },
      ];
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.getData(collectionName, { conditions });
      expect(mockWhere).toBeCalledTimes(conditions.length + 1);
      for (let index = 0; index < conditions.length; index++) {
        expect(mockWhere).nthCalledWith(
          index + 2,
          conditions[index].field,
          conditions[index].operator,
          conditions[index].value,
        );
      }
    });
    test('should order by fields', async () => {
      const firestoreDb = new FirestoreDb(config);
      const orderBy: QueryOrder[] = [
        { field: 'field', order: 'asc' },
        { field: 'field1', order: 'desc' },
      ];
      await firestoreDb.getData(collectionName, { orderBy });
      expect(mockOrderBy).toBeCalledTimes(orderBy.length);
      for (let index = 0; index < orderBy.length; index++) {
        expect(mockOrderBy).nthCalledWith(
          index + 1,
          orderBy[index].field,
          orderBy[index].order,
        );
      }
    });
    test('should order asc by default', async () => {
      const firestoreDb = new FirestoreDb(config);
      const orderBy: QueryOrder = { field: 'field' };
      await firestoreDb.getData(collectionName, { orderBy: [orderBy] });
      expect(mockOrderBy).toBeCalledTimes(1);
      expect(mockOrderBy).toBeCalledWith(orderBy.field, 'asc');
    });
    test('should limit the number of results', async () => {
      const firestoreDb = new FirestoreDb(config);
      const limit = { page: 3, count: 5 };
      await firestoreDb.getData(collectionName, { limit });
      expect(mockStartAt).toBeCalledTimes(1);
      expect(mockStartAt).toBeCalledWith(15);
      expect(mockLimit).toBeCalledTimes(1);
      expect(mockLimit).toBeCalledWith(5);
    });
  });

  describe('save', () => {
    const objToSave = {
      field1: 'value1',
      field2: 'value2',
    };
    test('should save object', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.save(objToSave, collectionName);
      expect(mockCollection).toBeCalledTimes(1);
      expect(mockCollection).toBeCalledWith(collectionName);
      expect(mockDocument).toBeCalledTimes(1);
      expect(mockSet).toBeCalledTimes(1);
      expect(mockGetDoc).toBeCalledTimes(1);
    });
    test('should use server side id if non provided', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.save(objToSave, collectionName);
      expect(mockDocument).toBeCalledWith();
    });
    test('should use server side id if invalid provided', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.save(objToSave, collectionName, 'non existing field');
      expect(mockDocument).toBeCalledWith();
    });
    test('should use provided primary credential as id', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.save(objToSave, collectionName, 'field1');
      expect(mockDocument).toBeCalledWith('value1');
    });
    test('should add _createdAt', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.save(objToSave, collectionName);
      expect(mockSet).toBeCalledWith({
        ...objToSave,
        _createdAt: 'server_timestamp',
        _deleted: false,
      });
    });
    test('should respect _createdAt sent', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.save(
        { ...objToSave, _createdAt: 'given' },
        collectionName,
      );
      expect(mockSet).toBeCalledWith({
        ...objToSave,
        _createdAt: 'given',
        _deleted: false,
      });
    });
    test('should respect createdAt sent', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.save(
        { ...objToSave, createdAt: 'given' },
        collectionName,
      );
      expect(mockSet).toBeCalledWith({
        ...objToSave,
        createdAt: 'given',
        _deleted: false,
      });
    });
    test('should return flatten object with id', async () => {
      const firestoreDb = new FirestoreDb(config);
      const saved = await firestoreDb.save(objToSave, collectionName);
      expect(saved).toStrictEqual({
        id: '1',
        field1: 'value1',
        field2: 'value2',
      });
    });
  });

  describe('update', () => {
    const id = 'id';
    const values = {
      field: 'newValue',
    };
    test('should update object', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.update(id, values, collectionName);
      expect(mockCollection).toBeCalledTimes(1);
      expect(mockCollection).toBeCalledWith(collectionName);
      expect(mockDocument).toBeCalledTimes(1);
      expect(mockDocument).toBeCalledWith(id);
      expect(mockUpdate).toBeCalledTimes(1);
      expect(mockGetDoc).toBeCalledTimes(1);
    });
    test('should add _updateAt', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.update(id, values, collectionName);
      expect(mockUpdate).toBeCalledWith({
        field: 'newValue',
        _updatedAt: 'server_timestamp',
      });
    });
    test('should respect _updatedAt given', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.update(
        id,
        { ...values, _updatedAt: 'given' },
        collectionName,
      );
      expect(mockUpdate).toBeCalledWith({
        field: 'newValue',
        _updatedAt: 'given',
      });
    });
    test('should respect updatedAt given', async () => {
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.update(
        id,
        { ...values, updatedAt: 'given' },
        collectionName,
      );
      expect(mockUpdate).toBeCalledWith({
        field: 'newValue',
        updatedAt: 'given',
      });
    });
    test('should return flatten object with id', async () => {
      const firestoreDb = new FirestoreDb(config);
      const updated = await firestoreDb.update(id, values, collectionName);
      expect(updated).toStrictEqual({
        id: '1',
        field1: 'value1',
        field2: 'value2',
      });
    });
  });

  describe('delete', () => {
    test('should soft delete an element', async () => {
      const id = 'id';
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.delete(id, collectionName);
      expect(mockCollection).toBeCalledTimes(1);
      expect(mockCollection).toBeCalledWith(collectionName);
      expect(mockDocument).toBeCalledTimes(1);
      expect(mockDocument).toBeCalledWith(id);
      expect(mockUpdate).toBeCalledWith({
        _updatedAt: 'server_timestamp',
        _deleted: true,
      });
    });
  });

  describe('hardDelete', () => {
    test('should delete element', async () => {
      const id = 'id';
      const firestoreDb = new FirestoreDb(config);
      await firestoreDb.hardDelete(id, collectionName);
      expect(mockCollection).toBeCalledTimes(1);
      expect(mockCollection).toBeCalledWith(collectionName);
      expect(mockDocument).toBeCalledTimes(1);
      expect(mockDocument).toBeCalledWith(id);
      expect(mockDelete).toBeCalledTimes(1);
    });
  });

  describe('listen', () => {
    const modifiers = {
      conditions: [
        {
          field: 'field',
          operator: '==',
          value: 'value',
        },
      ],
      orderBy: [{ field: 'field' }],
    };
    const callback = jest.fn();
    test('should create snapshot', () => {
      const firestoreDb = new FirestoreDb(config);
      firestoreDb.listen(collectionName, modifiers, callback);
      expect(mockCollection).toBeCalledWith(collectionName);
      expect(mockWhere).toBeCalledTimes(2);
      expect(mockWhere).toBeCalledWith('_deleted', '==', false);
      expect(mockOrderBy).toBeCalledTimes(1);
    });
    test('should call callback with changes', () => {
      const firestoreDb = new FirestoreDb(config);
      firestoreDb.listen(collectionName, modifiers, callback);
      expect(callback).toBeCalledTimes(1);
      expect(callback).toBeCalledWith([mockGetDoc()]);
    });
  });
});
