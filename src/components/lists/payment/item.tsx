import { Payments } from '@/types/enums';

type Props = {
  type: Payments;
  icon: string;
  title: string;
  selected: string;
  setSelected: (id: string) => void;
};

export const PaymentItem = ({
  type,
  icon,
  title,
  setSelected,
  selected = '',
}: Props) => {
  return (
    <div
      className={
        'flex cursor-pointer items-center gap-3 rounded-md p-4 transition ' +
        (selected === type
          ? 'border-1 border-purple-medium bg-purple-light'
          : 'bg-gray-200 hover:bg-gray-300')
      }
      onClick={() => setSelected(type)}
      onKeyDown={() => setSelected(type)}
      role="button"
      tabIndex={0}
    >
      <div>
        <img src={icon} alt="" />
      </div>
      <p>{title}</p>
    </div>
  );
};
