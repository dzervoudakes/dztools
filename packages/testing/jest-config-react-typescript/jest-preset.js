module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx,js,jsx,mjs}',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/index.ts'
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/index.tsx', '<rootDir>/src/polyfills.ts'],
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
    '^node_modules[/](.+)': '<rootDir>/node_modules/$1'
  },
  setupFiles: [require.resolve('jest-localstorage-mock')],
  setupFilesAfterEnv: [require.resolve('@testing-library/jest-dom/extend-expect')],
  testEnvironment: require.resolve('jest-environment-jsdom-global'),
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*(*.)@(spec|test).{js,jsx,ts,tsx}'
  ],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx|js|jsx|mjs)$': require.resolve('ts-jest'),
    '^.+\\.s?css$': require.resolve('./utils/style-transform.js'),
    '^.+\\.(png|jpg|jpeg|git|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
      './utils/file-transform.js'
    )
  },
  moduleDirectories: ['node_modules']
};
