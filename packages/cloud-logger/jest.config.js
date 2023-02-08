const config = require('../../config/jest/base.jest.config');

module.exports = {
  ...config,
  displayName: require('./package.json').name,
  coverageThreshold: {
    global: {
      ...config.coverageThreshold.global,
      lines: 84,
      statements: 84,
    },
  },
};
