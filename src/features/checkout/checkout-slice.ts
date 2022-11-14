import { createSlice } from '@reduxjs/toolkit';

import { CheckoutState } from '@/types';

import * as actions from './actions';

const initialState: CheckoutState = {
  items: [],
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    add: actions.addCoffeeAction,
    remove: actions.removeCoffeeAction,
    reset: actions.resetCoffeeAction,
  },
});

export const { add, remove, reset } = checkoutSlice.actions;

export default checkoutSlice.reducer;
