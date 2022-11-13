import { useState } from 'react';
import icons from '../../assets/icons';

const payments = [
  {
    icon: icons.creditCard,
    type: 'creditCard',
    title: 'Cartão de crédito',
  },
  {
    icon: icons.build,
    type: 'debitCard',
    title: 'Cartão de débito',
  },
  {
    icon: icons.money,
    type: 'money',
    title: 'Dinheiro',
  },
];

type Props = {
  type: string;
  icon: string;
  title: string;
  selected: string;
  setSelected: (id: string) => void;
};

const Item = ({ type, icon, title, setSelected, selected = '' }: Props) => {
  return (
    <div
      className={
        'flex cursor-pointer items-center gap-3 rounded-md p-4 transition' +
        (selected === type
          ? ' border-2 border-purple-medium bg-purple-light'
          : ' bg-gray-200 hover:bg-gray-300')
      }
      onClick={() => setSelected(type)}
    >
      <div>
        <img src={icon} alt="" />
      </div>
      <p>{title}</p>
    </div>
  );
};

export const PaymentList = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="flex gap-3">
      {payments.map((payment) => (
        <Item selected={selected} setSelected={setSelected} {...payment} />
      ))}
    </div>
  );
};
