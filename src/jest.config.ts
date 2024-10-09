module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.next/'],
    collectCoverage: true, // Bật tính năng thu thập coverage
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/index.{ts,tsx}', '!**/node_modules/**'],
  };
  