import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

import { CheckoutState } from '@/types';

const resetCoffeeAction: CaseReducer<CheckoutState, PayloadAction> = (
  state,
) => {
  state.items = [];
};

export { resetCoffeeAction };
