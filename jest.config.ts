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
    '!<rootDir>/*.config.{ts,js}',
    '!<rootDir>/tests/e2e/**/*.{ts,tsx}',
    '!<rootDir>/src/mocks/**/*.{ts,tsx}',
    '!<rootDir>/.storybook/**/*.{ts,tsx,js}',
    '!**/types.ts',
    '!**/infra/**',
    '!**/node_modules/**',
    '!**/.next/**',
  ],
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '/infra/',
    '<rootDir>/src/mocks/*.{ts,tsx}',
    '<rootDir>/tests/*.{ts,tsx}',
  ],
  testMatch: ['<rootDir>/src/**/*.spec.ts?(x)'],
  moduleNameMapper: {
    'next/navigation': '<rootDir>/tests/__mocks__/next-useRouter.ts',
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
    fetch: global.fetch,
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
