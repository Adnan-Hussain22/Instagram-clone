module.exports = {
  verbose: true,
  globals: {
    __DEV__: true,
  },
  roots: ['<rootDir>/src', '<rootDir>/__tests__/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|svg|ttf)$': '<rootDir>/__mocks__/fileMock.js',
  },
  coveragePathIgnorePatterns: [
    '/__snapshots__/',
    '/build/',
    'jest.config.js',
    'package.json',
    'src/constants/',
    'src/assests/',
    'src/hooks/',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(lodash-es|react-native)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
