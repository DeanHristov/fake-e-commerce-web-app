import { apiSlice } from '@/store/slices';
import { Utils } from '@/utils/Utils';
import { createLogger } from 'redux-logger';

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

// Storing partial data from the app store in the localStorage
//@ts-ignore
middlewares.push(({ getState }) => (next) => (action) => {
  const result = next(action);
  Utils.debounce(() => {
    const { shoppingCart, wishList, products } = getState();

    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    localStorage.setItem('wishList', JSON.stringify(wishList));
  }, 500)();

  return result;
});

middlewares.push(apiSlice.middleware);

export { middlewares };
