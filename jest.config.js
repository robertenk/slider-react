module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    // Use existing preprocessor 'babel-jest'.
    // If you need more control about how your files are being transpiled in tests (specific node version/browser etc.),
    // you could remove 'babel-jest' and write your own preprocessor.
    // By default, Jest sets the environment variable 'test' when running tests.
    // Do not change this variable via parameter when running Jest – as 'babel-jest' will not work anymore.
    // There is no need to add test-specific environments in your babel.config.js
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
    '<rootDir>/(tests/integration/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true, // enable console output
  testEnvironment: 'jsdom' // 'jsdom' = browser-like environment
}
