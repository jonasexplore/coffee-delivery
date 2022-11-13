type ButtonProps = {
  icon?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const SecondaryButton = ({
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) => (
  <button
    className={
      'flex gap-1 rounded bg-gray-200 p-2 transition hover:bg-gray-300' +
      ` ${className}`
    }
    {...props}
  >
    {icon && <img src={icon} alt="" />}
    {children}
  </button>
);
