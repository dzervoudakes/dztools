module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,mjs}',
    '!<rootDir>/src/index.jsx',
    '!<rootDir>/src/polyfills.js',
    '!<rootDir>/src/components/**/index.js'
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/index.jsx', '<rootDir>/src/polyfills.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  moduleNameMapper: {
    '\\.s?css$': require.resolve('identity-obj-proxy'),
    '^@src[/](.+)': '<rootDir>/src/$1',
    '^@shared[/](.+)': '<rootDir>/src/components/shared/$1',
    '^node_modules[/](.+)': '<rootDir>/node_modules/$1'
  },
  setupFiles: [
    require.resolve('jest-localstorage-mock'),
    require.resolve('jest-prop-type-error')
  ],
  setupFilesAfterEnv: [require.resolve('@testing-library/jest-dom/extend-expect')],
  testEnvironment: require.resolve('jest-environment-jsdom-global'),
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*(*.)@(spec|test).{js,jsx}'
  ],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': require.resolve('babel-jest'),
    '^.+\\.s?css$': require.resolve('./utils/style-transform.js'),
    '^.+\\.(png|jpg|jpeg|git|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
      './utils/file-transform.js'
    )
  },
  moduleDirectories: ['node_modules']
};