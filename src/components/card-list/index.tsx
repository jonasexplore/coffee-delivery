import { useState } from 'react';
import { Counter } from '../counter';
import icons from '../../assets/icons';
import { SecondaryButton } from '../buttons/secondary';
import { CoffeeItem } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as checkoutSlice from '../../features/checkout/checkout-slice';

type Props = {
  items: CoffeeItem[];
};

const Item = ({ id, quantity }: CoffeeItem) => {
  const [count, setCount] = useState(quantity);

  const dispatch = useDispatch();

  const { items } = useSelector((state: RootState) => state.coffee);

  const coffee = items.find((item) => item.id === id);

  return (
    <div>
      <div className="mb-6 flex gap-5">
        <div className="w-12">
          <img src={coffee?.img} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <p>{coffee?.title}</p>
          <div className="flex gap-2">
            <Counter quantity={count} setQuantity={setCount} />
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

export const CardList = ({ items = [] }: Props) => {
  if (items.length === 0) {
    return <p className="text-center">Nenhum item no carrinho</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
};
