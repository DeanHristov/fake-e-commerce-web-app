import { configureStore } from '@reduxjs/toolkit';
import {
  type TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'; // @ts-ignore
import { middlewares } from './middlewares';
import { reducer } from './rootReducer'; //@see: https://redux-toolkit.js.org/usage/usage-with-typescript#configurestore

//@see: https://redux-toolkit.js.org/usage/usage-with-typescript#configurestore
export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    // @ts-ignore
    return getDefaultMiddleware().concat(middlewares);
  },
});

//@see: https://redux-toolkit.js.org/tutorials/typescript
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;

//@see: https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;
