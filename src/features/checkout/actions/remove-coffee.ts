import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { RemoveCoffee, CheckoutState } from '../../../types';

const removeCoffeeAction: CaseReducer<
  CheckoutState,
  PayloadAction<RemoveCoffee>
> = (state, action) => {
  const { id } = action.payload;

  state.items = state.items.filter((item) => item.id !== id);
};

export { removeCoffeeAction };
