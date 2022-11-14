import { configureStore } from '@reduxjs/toolkit';

import checkoutReducer from '@/features/checkout/checkout-slice';
import ordersReducer from '@/features/orders/orders-slice';
import coffeeReducer from '@/features/products/coffee-slice';

const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
    coffee: coffeeReducer,
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
