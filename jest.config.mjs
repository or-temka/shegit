export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
