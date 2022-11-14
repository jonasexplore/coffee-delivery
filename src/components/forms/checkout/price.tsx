type Props = {
  totalPrice: string;
};

export const PriceTable = ({ totalPrice }: Props) => {
  return (
    <div>
      <div className="pt-6 text-sm">
        <div className="flex justify-between">
          <p>Total de itens</p>
          <p>R$ {totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p>Entrega</p>
          <p>R$ 0,00</p>
        </div>
      </div>
      <div className="flex justify-between text-xl">
        <strong>Total</strong>
        <strong>R$ {totalPrice}</strong>
      </div>
    </div>
  );
};
