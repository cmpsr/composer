import { CloudLoggerConfig, Severity } from './types';
export declare class CloudLogger {
    private logger;
    constructor(config: CloudLoggerConfig);
    log(message: string, severity: Severity): Promise<void>;
}
//# sourceMappingURL=CloudLogger.d.ts.map