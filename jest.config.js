module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/dist/',
    '/node_modules/',
  ],
  coverageReporters: ['text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  globals: {
    'ts-jest': {
      extends: './babel.config.js',
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '^.+\\.module\\.css$': 'identity-obj-proxy',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/dist',
  ],
  notify: true,
  notifyMode: 'always',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['../../scripts/jest/setupTests.js'],
  testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/*.test.+(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/', '^.+\\.module\\.css$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|ts|tsx)$': '../../node_modules/babel-jest',
    '^.+\\.css$': '../../scripts/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.css$',
  ],
};
