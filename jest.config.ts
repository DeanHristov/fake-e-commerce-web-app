import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  verbose: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/middleware.ts',
    '!<rootDir>/*.config.{ts,js}',
    '!<rootDir>/tests/e2e/**/*.{ts,tsx}',
    '!<rootDir>/src/mocks/**/*.{ts,tsx}',
    '!**/types.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/app/**/page.tsx',
    '!**/app/**/loading.tsx',
    '!**/app/**/not-found.tsx',
    '!**/src/app/layout.tsx',
    '!**/src/AppProvider.tsx',
    '!**/app/components/**/index.ts',
    '!**/app/api/**/route.ts',
    '!**/src/store/**',
  ],
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '<rootDir>/src/mocks/*.{ts,tsx}',
    '<rootDir>/tests/*.{ts,tsx}',
  ],
  testMatch: ['<rootDir>/src/**/*.spec.ts?(x)'],
  moduleNameMapper: {
    'next/navigation': '<rootDir>/tests/__mocks__/next-useRouter.ts',
    'react-redux': '<rootDir>/tests/__mocks__/react-redux.ts',
    jose: '<rootDir>/tests/__mocks__/jose.ts',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  globals: {
    //@see: https://github.com/node-fetch/node-fetch/discussions/1503
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
