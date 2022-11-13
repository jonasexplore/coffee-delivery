import { ButtonVariant } from './button-variant';
import { HeaderVariant } from './header-variant';

type Props = {
  variant?: 'button' | 'header';
  quantity?: number;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const variants = {
  button: (props: Props) => <ButtonVariant {...props} />,
  header: (props: Props) => (
    <HeaderVariant quantity={props?.quantity || 0} {...props} />
  ),
};

export const Cart = ({ variant = 'button', ...props }: Props) => {
  return variants[variant](props);
};
