const config = require('../../config/jest/base.jest.config');

module.exports = {
  ...config,
  displayName: require('./package.json').name,
  coverageThreshold: {
    global: {
      ...config.coverageThreshold.global,
      branches: 3,
      functions: 5,
      lines: 5,
      statements: 5,
    },
  },
};
