type ButtonProps = {
  icon?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const PrimaryButton = ({
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={
        'w-full rounded bg-yellow-medium p-2 font-bold uppercase text-white transition hover:bg-yellow-dark' +
        ` ${className}`
      }
      {...props}
    >
      {icon && <img src={icon} alt="" />}
      {children}
    </button>
  );
};
