import { SetupWorker, setupWorker } from 'msw';

import { productsHandler } from '@/mocks/handlers/products';
import userHandlers from '@/mocks/handlers/users';

export const worker: SetupWorker = setupWorker(
  ...productsHandler,
  ...userHandlers,
);
