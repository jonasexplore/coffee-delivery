import { configureStore } from '@reduxjs/toolkit';
import checkoutReducer from '../features/checkout/checkout-slice';
import coffeeReducer from '../features/products/coffee-slice';

const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
    coffee: coffeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
