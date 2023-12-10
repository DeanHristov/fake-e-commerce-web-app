import { createLogger } from 'redux-logger';
import { apiSlice } from '@/store/slices';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(
    createLogger({
      duration: true,
      timestamp: false,
      collapsed: true,
      colors: {
        title: () => '#139BFE',
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextState: () => '#A47104',
        error: () => '#ff0005',
      },
      predicate: () => typeof window !== 'undefined',
    }),
  );
}

middlewares.push(apiSlice.middleware);

export { middlewares };
