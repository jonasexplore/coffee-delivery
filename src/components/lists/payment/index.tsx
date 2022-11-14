import { payments } from './data';
import { PaymentItem } from './item';

type Props = {
  selectedPayment: string;
  setSelectedPayment: (value: string) => void;
};

const PaymentList = ({ selectedPayment, setSelectedPayment }: Props) => {
  return (
    <div className="flex gap-3">
      {payments.map((payment, index) => (
        <PaymentItem
          key={index}
          selected={selectedPayment}
          setSelected={setSelectedPayment}
          {...payment}
        />
      ))}
    </div>
  );
};

export { PaymentList, PaymentItem };
