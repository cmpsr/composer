module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
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
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  notify: true,
  notifyMode: 'always',
  roots: ['<rootDir>packages'],
  testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/*.test.+(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/', '^.+\\.module\\.css$'],
  transform: {
    // '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|ts|tsx)$': './node_modules/babel-jest',
    '^.+\\.css$': './scripts/jest/cssTransform.js',
  },
  transformIgnorePattern: {
    '^.+\\.test.(ts|tsx)$': 'ts-jest',
  },
};
