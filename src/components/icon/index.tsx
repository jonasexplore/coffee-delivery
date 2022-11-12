type Props = {
  img: string;
  label: string;
};

export const Icon = ({ img, label }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <img src={img} alt="" className="h-8 w-8" />
      <span>{label}</span>
    </div>
  );
};
