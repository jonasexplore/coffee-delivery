import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { AddCoffee, CheckoutState } from '../../../types';

const addCoffeeAction: CaseReducer<CheckoutState, PayloadAction<AddCoffee>> = (
  state,
  action,
) => {
  const { id, quantity } = action.payload;

  const item = state.items.find((item) => item.id === id);

  if (item) {
    item.quantity = quantity;
    return;
  }

  state.items.push(action.payload);
};

export { addCoffeeAction };
