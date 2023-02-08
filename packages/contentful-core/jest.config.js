const config = require('../../config/jest/base.jest.config');

module.exports = {
  ...config,
  displayName: require('./package.json').name,
  coverageThreshold: {
    global: {
      ...config.coverageThreshold.global,
      branches: 23,
      functions: 13,
      lines: 32,
      statements: 36,
    },
  },
};
