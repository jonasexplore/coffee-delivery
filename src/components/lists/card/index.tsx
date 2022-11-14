import { CoffeeItem } from '@/types';

import { CardItem } from './item';

type Props = {
  items: CoffeeItem[];
};

const CardList = ({ items = [] }: Props) => {
  if (items.length === 0) {
    return <p className="text-center">Nenhum item no carrinho</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <CardItem key={index} {...item} />
      ))}
    </div>
  );
};

export { CardList, CardItem };
