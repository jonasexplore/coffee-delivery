type Props = {} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className = '', ...props }: Props) => {
  return (
    <input
      type="text"
      className={
        'h-10 rounded bg-gray-200 p-3 outline-yellow-medium ' + className
      }
      {...props}
    />
  );
};
