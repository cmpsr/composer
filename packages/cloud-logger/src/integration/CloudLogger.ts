import { Logging, Log } from '@google-cloud/logging';
import { CloudLoggerConfig, Severity } from './types';

export class CloudLogger {
  private logger: Log;

  constructor(config: CloudLoggerConfig) {
    this.logger = new Logging(config).log(config.logName);
  }

  async log(message: string, severity: Severity) {
    const metadata = {
      resource: { type: 'global' },
      severity,
    };
    const entry = this.logger.entry(metadata, message);
    await this.logger.write(entry);
  }
}
