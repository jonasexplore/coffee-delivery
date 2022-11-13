import { ShoppingCart } from '../../../assets/icons/Cart';

type Props = {
  quantity: number;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const HeaderVariant = ({ quantity = 0, ...props }: Props) => {
  return (
    <div className="relative">
      <button
        className="
        flex
        h-9
        w-9
        flex-col
        items-center
        rounded
        bg-yellow-light
        px-2
        py-2
        transition
      "
        {...props}
      >
        <div
          className="
            absolute
            ml-6
            -mt-4
            rounded-full
            bg-yellow-dark
            px-1
            text-xs
            text-white
          "
        >
          {Boolean(quantity) && <div>{quantity}</div>}
        </div>
        <ShoppingCart className="fill-yellow-dark" />
      </button>
    </div>
  );
};
