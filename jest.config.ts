module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^([^./]+)$': '<rootDir>/src/$1',
    '^([^./]+)/(.+)$': '<rootDir>/src/$1/$2',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
};
