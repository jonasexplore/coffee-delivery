import { createSlice } from '@reduxjs/toolkit';

import { OrderState } from '@/types';

import { addOrderAction } from './actions';

const initialState: OrderState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addOrder: addOrderAction,
  },
});

export const { addOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
