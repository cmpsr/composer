import { CloudLogger } from './integration/CloudLogger';
declare const useCloudLogger: (logName: string, projectId?: string, email?: string, privateKey?: string) => CloudLogger;
export * from './integration/types';
export { CloudLogger };
export default useCloudLogger;
//# sourceMappingURL=index.d.ts.map