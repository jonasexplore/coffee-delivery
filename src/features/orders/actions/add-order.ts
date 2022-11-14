import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

import { AddOrder, OrderState } from '@/types';

const addOrderAction: CaseReducer<OrderState, PayloadAction<AddOrder>> = (
  state,
  action,
) => {
  const { id } = action.payload;

  const item = state.orders.find((item) => item.id === id);

  if (item) {
    return;
  }

  state.orders.push(action.payload);
};

export { addOrderAction };
