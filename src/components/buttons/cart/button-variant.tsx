import { ShoppingCart } from '../../../assets/icons/Cart';

export const ButtonVariant = () => (
  <button
    className="
        flex
        h-9
        w-9
        items-center
        rounded
        bg-purple-dark
        p-2
        transition
        hover:bg-purple-medium
      "
  >
    <ShoppingCart className="fill-white" />
  </button>
);
