import {
  FirestoreConfig,
  IDatabase,
  QueryModifiers,
  QueryCondition,
  QueryOrder,
} from 'types';
import {
  Firestore,
  CollectionReference,
  Query,
  DocumentReference,
  FieldValue,
} from '@google-cloud/firestore';

class FirestoreDb implements IDatabase {
  private db: Firestore;

  constructor(config: FirestoreConfig) {
    this.db = new Firestore(config);
  }

  async getItem(id: string | number, from: string) {
    const doc = await this.db.collection(from).doc(id.toString()).get();
    const data = doc?.data();
    return data && !data._deleted
      ? { id: doc.id, ...this.removeHiddenFields(doc.data()) }
      : undefined;
  }

  async getData(from: string, modifiers?: QueryModifiers) {
    let query = this.prepareQuery(from, modifiers?.conditions);
    query = this.addOrderBy(query, modifiers?.orderBy);
    if (modifiers?.limit) {
      const { page, count } = modifiers.limit;
      query = query.startAt(page * count).limit(count);
    }
    const snapshot = await query.get();
    const data: any[] = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, ...this.removeHiddenFields(doc.data()) });
    });
    return data;
  }

  async save(obj: object, to: string, primaryCredentialField?: string) {
    const collection = this.db.collection(to);
    let doc: DocumentReference;
    if (primaryCredentialField && obj.hasOwnProperty(primaryCredentialField)) {
      doc = collection.doc(obj[primaryCredentialField]);
    } else {
      // if no id provided use an auto generated id
      doc = collection.doc();
    }
    await doc.set(this.addNotDeleted(this.addCreatedAt(obj)));
    const savedObject = await doc.get();
    return {
      id: savedObject.id,
      ...this.removeHiddenFields(savedObject.data()),
    };
  }

  async update(id: string | number, values: object, to: string) {
    const doc = this.db.collection(to).doc(id.toString());
    await doc.update(this.addUpdatedAt(values));
    const updatedObject = await doc.get();
    return {
      id: updatedObject.id,
      ...this.removeHiddenFields(updatedObject.data()),
    };
  }

  async delete(id: string | number, from: string) {
    return this.update(id, { _deleted: true }, from);
  }

  async hardDelete(id: string | number, from: string) {
    const doc = this.db.collection(from).doc(id.toString());
    return doc.delete();
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  listen(from: string, modifiers: QueryModifiers, callback: Function) {
    let query = this.prepareQuery(from, modifiers.conditions);
    query = this.addOrderBy(query, modifiers.orderBy);
    return query.onSnapshot((snapshot) => {
      callback(snapshot.docChanges());
    });
  }

  private prepareQuery(from: string, conditions: QueryCondition[]) {
    const collection = this.db.collection(from);
    let query = collection.where('_deleted', '==', false);
    if (conditions) {
      conditions.forEach((condition) => {
        query = query.where(
          condition.field,
          condition.operator,
          condition.value,
        );
      });
    }
    return query;
  }

  private addOrderBy(
    query: CollectionReference | Query,
    orderBy?: QueryOrder[],
  ) {
    if (!orderBy || orderBy.length < 1) return query;
    let orderedQuery = query;
    orderBy.forEach((order) => {
      orderedQuery = orderedQuery.orderBy(order.field, order.order || 'asc');
    });
    return orderedQuery;
  }

  private addNotDeleted(obj: object) {
    return { ...obj, _deleted: false };
  }

  private addCreatedAt(obj: object) {
    if (obj.hasOwnProperty('_createdAt') || obj.hasOwnProperty('createdAt')) {
      return obj;
    }
    return { ...obj, _createdAt: FieldValue.serverTimestamp() };
  }

  private addUpdatedAt(obj: object) {
    if (obj.hasOwnProperty('_updatedAt') || obj.hasOwnProperty('updatedAt')) {
      return obj;
    }
    return { ...obj, _updatedAt: FieldValue.serverTimestamp() };
  }

  private removeHiddenFields(obj: object): object {
    const newObj = { ...obj };
    delete newObj['_createdAt'];
    delete newObj['_deleted'];
    return newObj;
  }
}

export { FirestoreDb };
