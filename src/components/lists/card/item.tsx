import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import icons from '@/assets/icons';
import { SecondaryButton } from '@/components/buttons/secondary';
import { Counter } from '@/components/counter';
import * as checkoutSlice from '@/features/checkout/checkout-slice';
import { RootState } from '@/store';
import { CoffeeItem } from '@/types';

export const CardItem = ({ id, quantity }: CoffeeItem) => {
  const [count, setCount] = useState(quantity);

  const dispatch = useDispatch();

  const { items } = useSelector((state: RootState) => state.coffee);

  const coffee = items.find((item) => item.id === id);

  const handleSetCount = (newQuantity: number) => {
    setCount(newQuantity);
    dispatch(
      checkoutSlice.add({
        id,
        quantity: newQuantity,
        price: coffee?.price || 0,
      }),
    );
  };

  return (
    <div>
      <div className="mb-6 flex gap-5">
        <div className="w-12">
          <img src={coffee?.img} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <p>{coffee?.title}</p>
          <div className="flex gap-2">
            <Counter quantity={count} setQuantity={handleSetCount} />
            <SecondaryButton
              icon={icons.trash}
              className="text-xs uppercase"
              onClick={() => dispatch(checkoutSlice.remove({ id }))}
            >
              Remover
            </SecondaryButton>
          </div>
        </div>
        <strong>R$ {coffee?.price}</strong>
      </div>
      <hr />
    </div>
  );
};
