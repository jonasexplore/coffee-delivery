import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { HeaderLayout } from '@/layouts/header';
import { RootState } from '@/store';
import { PaymentLabels, Payments } from '@/types/enums';

export const SuccessPage = () => {
  const { id } = useParams();

  const { orders } = useSelector((state: RootState) => state.orders);

  const order = orders.find((order) => order.id === id);

  return (
    <HeaderLayout>
      <div className="mt-20">
        <h1 className="font-baloo text-3xl font-bold text-yellow-dark">
          Uhu! Pedido confirmado
        </h1>
        <p className="mt-1 mb-10 text-xl">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="grid grid-cols-2 gap-x-24">
          <div
            className="
            rounded-tr-3xl
            rounded-bl-3xl
            rounded-tl-md
            rounded-br-md
            border-1
            border-yellow-dark
          "
          >
            <div className="m-10 flex flex-col gap-8">
              <div className="flex gap-3">
                <div>
                  <img src="/icons/point.png" alt="Ícone" />
                </div>
                <div className="flex-1">
                  <p className="text-xl">Entrega em</p>
                  <p className="font-bold">{order?.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <img src="/icons/clock.png" alt="Ícone" />
                </div>
                <div className="flex-1">
                  <p className="text-xl">Previsão de entrega</p>
                  <p className="font-bold">20 min - 30 min</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <img src="/icons/dollar.png" alt="Ícone" />
                </div>
                <div className="flex-1">
                  <p className="text-xl">Pagamento na entrega</p>
                  <p className="font-bold">
                    {PaymentLabels[order?.paymentType as Payments]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="/finished.png" alt="" />
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};
