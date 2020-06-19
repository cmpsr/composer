export interface CloudLoggerConfig {
    projectId?: string;
    keyFilename?: string;
    credentials?: {
        client_email?: string;
        private_key?: string;
    };
    logName: string;
}
export declare enum Severity {
    INFO = "INFO",
    DEBUG = "DEBUG",
    WARNING = "WARNING",
    ERROR = "ERROR",
    CRITICAL = "CRITICAL"
}
//# sourceMappingURL=types.d.ts.map