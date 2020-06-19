export interface FirestoreConfig {
  projectId?: string;
  keyFilename?: string;
  credentials?: { client_email?: string; private_key?: string };
}

export interface IDatabase {
  getItem: (id: string | number, from: string) => Promise<any>;
  getData: (from: string, modifiers?: QueryModifiers) => Promise<object[]>;
  save: (
    obj: object,
    to: string,
    primaryCredentialField?: string
  ) => Promise<object>;
  update: (id: string | number, values: object, to: string) => Promise<object>;
  delete: (id: string | number, from: string) => Promise<any>;
  hardDelete: (id: string | number, from: string) => Promise<any>;
}

export interface QueryModifiers {
  conditions?: QueryCondition[];
  orderBy?: QueryOrder[];
  limit?: QueryLimit;
}

export interface QueryCondition {
  field: string;
  operator:
    | '<'
    | '<='
    | '=='
    | '>='
    | '>'
    | 'array-contains'
    | 'in'
    | 'array-contains-any';
  value: string | string[];
}

export interface QueryOrder {
  field: string;
  order?: 'asc' | 'desc';
}

export interface QueryLimit {
  page: number;
  count: number;
}
