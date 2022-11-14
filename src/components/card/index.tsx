import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as checkoutSlice from '@/features/checkout/checkout-slice';
import { Coffee } from '@/types';

import { Buttons } from '../buttons';
import { Counter } from '../counter';
import { TagList } from '../lists/tag';

type Props = {
  coffee: Coffee;
};

const Card = ({ coffee }: Props) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const onClickButton = () => {
    setQuantity(1);

    dispatch(
      checkoutSlice.add({
        quantity,
        id: coffee.id,
        price: coffee.price,
      }),
    );
  };

  return (
    <div
      className="
        mt-8
        w-64
        rounded-tr-3xl
        rounded-bl-3xl
        rounded-tl-md
        rounded-br-md
        bg-gray-100
        px-6
      "
    >
      <div className="flex flex-col items-center pb-6">
        <div className="-mt-8">
          <img src={coffee.img} alt="" />
        </div>
        <TagList tags={coffee.tags} />
        <h2 className="text-xl font-bold">{coffee.title}</h2>
        <p className="text-base text-gray-500">{coffee.description}</p>
        <div className="flex w-full justify-between pt-8">
          <div>
            R${' '}
            <span
              className="
                flex-1
                font-baloo
                text-2xl
                font-extrabold
                text-gray-700
              "
            >
              {coffee.price}
            </span>
          </div>
          <div className="flex gap-2">
            <Counter quantity={quantity} setQuantity={setQuantity} />
            <Buttons.Cart variant="button" onClick={onClickButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
