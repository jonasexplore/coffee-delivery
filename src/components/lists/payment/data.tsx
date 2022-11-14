import icons from '@/assets/icons';
import { Payments } from '@/types/enums';

export const payments = [
  {
    icon: icons.creditCard,
    type: Payments.CREDIT,
    title: 'Cartão de crédito',
  },
  {
    icon: icons.build,
    type: Payments.DEBIT,
    title: 'Cartão de débito',
  },
  {
    icon: icons.money,
    type: Payments.CASH,
    title: 'Dinheiro',
  },
];
