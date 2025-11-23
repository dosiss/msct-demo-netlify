module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '^~$': '<rootDir>',
    '^@$': '<rootDir>'
  },
  testMatch: ['**/tests/unit/**/*.spec.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/tests/unit/GeneralContactForm.spec.js',
  ]
};
