// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextEncoder } from 'util';
// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch'

Object.assign(global, { TextEncoder });
