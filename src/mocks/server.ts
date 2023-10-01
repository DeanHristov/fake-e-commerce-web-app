import { SetupServer, setupServer } from 'msw/node';

import { productsHandler } from '@mocks/handlers/products';
import userHandlers from '@mocks/handlers/users';

export const mockServer: SetupServer = setupServer(
  ...productsHandler,
  ...userHandlers,
);
