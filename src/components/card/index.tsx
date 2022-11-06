import { Coffee } from '../../types';
import { Button } from '../buttons';
import { Counter } from '../counter';
import { TagList } from '../tag';

type Props = {
  coffee: Coffee;
};

const Card = ({ coffee }: Props) => {
  return (
    <div
      className="
        m-6
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
        <div className="-mt-5">
          <img src={coffee.img} />
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
                text-2xl
                font-extrabold
                text-gray-700
              "
            >
              {coffee.price}
            </span>
          </div>
          <Counter />
          <Button.Cart />
        </div>
      </div>
    </div>
  );
};

export { Card };
