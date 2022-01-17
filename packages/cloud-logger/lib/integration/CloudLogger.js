"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloudLogger = void 0;

var _logging = require("@google-cloud/logging");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CloudLogger {
  constructor(config) {
    _defineProperty(this, "logger", void 0);

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