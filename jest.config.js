module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
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
    '<rootDir>/tests/unit/GamesPage.spec.js',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ]
};
