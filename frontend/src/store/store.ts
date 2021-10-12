import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { bikeApi, rentalApi } from 'services/services';

const extraArgument = {
  bikeApi,
  rentalApi,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument,
      },
    });
  },
});

export { extraArgument, store };
