import { ShoppingCart } from '@/assets/icons/Cart';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const ButtonVariant = (props: ButtonProps) => (
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
    {...props}
  >
    <ShoppingCart className="fill-white" />
  </button>
);
