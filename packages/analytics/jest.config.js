const config = require('../../config/jest/base.jest.config');

module.exports = {
  ...config,
  displayName: require('./package.json').name,
  coverageThreshold: {
    global: {
      ...config.coverageThreshold.global,
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
