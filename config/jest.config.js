module.exports = {
  rootDir: '../',
  testURL: 'http://localhost/',
  globals: { },
  testMatch: ['<rootDir>/src/**/__tests__/*.js?(x)', '<rootDir>/src/**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/src/index.js'
  ],
  // setupFilesAfterEnv: ['<rootDir>/config/__init__/setupTests.js'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/index.js',
    '<rootDir>/es',
    '<rootDir>/lib',
    '<rootDir>/dist',
    '<rootDir>/coverage',
    '<rootDir>/node_modules'
  ],
  moduleFileExtensions: [
    "js", "json", "vue"
  ],
  transform: {
    "^.+\\.vue$": require.resolve('vue-jest'),
    "^.+\\.jsx?$": require.resolve('babel-jest')
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/__init__/fileMock.js'
  }
}
