"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloudLogger = void 0;

var _logging = require("@google-cloud/logging");

class CloudLogger {
  constructor(config) {
    this.logger = new _logging.Logging(config).log(config.logName);
  }

  async log(message, severity) {
    const metadata = {
      resource: {
        type: 'global'
      },
      severity
    };
    const entry = this.logger.entry(metadata, message);
    await this.logger.write(entry);
  }

}

exports.CloudLogger = CloudLogger;