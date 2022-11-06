import { ButtonVariant } from './button-variant';
import { HeaderVariant } from './header-variant';

type Props = {
  variant?: 'button' | 'header';
  quantity?: number;
};

export const Cart = ({ variant = 'button', quantity = 0 }: Props) => {
  return variant === 'button' ? (
    <ButtonVariant />
  ) : (
    <HeaderVariant quantity={quantity} />
  );
};
