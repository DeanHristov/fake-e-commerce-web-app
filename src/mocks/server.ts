import { SetupServer, setupServer } from 'msw/node';

import { productsHandler } from './handlers/products';
import userHandlers from './handlers/users';

export const mockServer: SetupServer = setupServer(
  ...productsHandler,
  ...userHandlers,
);
