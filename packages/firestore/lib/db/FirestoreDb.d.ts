/// <reference types="@google-cloud/firestore" />
import { FirestoreConfig, IDatabase, QueryModifiers } from 'types';
declare class FirestoreDb implements IDatabase {
    private db;
    constructor(config: FirestoreConfig);
    getItem(id: string | number, from: string): Promise<{
        id: string;
    }>;
    getData(from: string, modifiers?: QueryModifiers): Promise<any[]>;
    save(obj: object, to: string, primaryCredentialField?: string): Promise<{
        id: string;
    }>;
    update(id: string | number, values: object, to: string): Promise<{
        id: string;
    }>;
    delete(id: string | number, from: string): Promise<{
        id: string;
    }>;
    hardDelete(id: string | number, from: string): Promise<FirebaseFirestore.WriteResult>;
    listen(from: string, modifiers: QueryModifiers, callback: Function): () => void;
    private prepareQuery;
    private addOrderBy;
    private addNotDeleted;
    private addCreatedAt;
    private addUpdatedAt;
    private removeHiddenFields;
}
export { FirestoreDb };
//# sourceMappingURL=FirestoreDb.d.ts.map