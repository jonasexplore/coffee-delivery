import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import icons from '@/assets/icons';
import { PrimaryButton } from '@/components/buttons/primary';
import { CardList } from '@/components/lists/card';
import { PaymentList } from '@/components/lists/payment';
import * as checkoutSlice from '@/features/checkout/checkout-slice';
import { addOrder } from '@/features/orders/orders-slice';
import { RootState } from '@/store';
import { CheckoutInitialProps } from '@/types';

import { AddressFields } from './address';
import { PriceTable } from './price';

export const CheckoutForm = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>('');

  const navigate = useNavigate();
  const dispacth = useDispatch();

  const formik = useFormik<CheckoutInitialProps>({
    initialValues: {
      cep: '',
      address: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      paymentType: '',
    },
    onSubmit: (values) => {
      const id = uuid();

      dispacth(checkoutSlice.reset());

      dispacth(addOrder({ id, ...values }));
      navigate(`/success/${id}`);
    },
  });

  const { items } = useSelector((state: RootState) => state.checkout);

  const totalPrice = items
    .reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
    .toFixed(2);

  const { values, handleChange, handleSubmit, setFieldValue } = formik;

  const handleChangePaymentType = (value: string) => {
    setSelectedPayment(value);
    setFieldValue('paymentType', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="
            mt-10
            mb-4
            grid
            gap-x-8
            sx:grid-cols-1
            sm:grid-cols-6-4
          "
      >
        <div className="flex flex-col">
          <p className="mb-4 font-baloo text-lg font-bold">
            Complete seu pedido
          </p>
          <div className="flex flex-col gap-3">
            <div className="rounded-md bg-gray-100">
              <AddressFields values={values} handleChange={handleChange} />
            </div>
            <div className="rounded-md bg-gray-100">
              <div className="flex flex-col gap-y-4 p-10">
                <div className="mb-4 flex gap-2">
                  <div>
                    <img src={icons.dollar} alt="" />
                  </div>
                  <div>
                    <h3>Pagamento</h3>
                    <p className="text-sm">
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </div>
                <PaymentList
                  selectedPayment={selectedPayment}
                  setSelectedPayment={handleChangePaymentType}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-4 font-baloo text-lg font-bold ">
            Cafés selecionados
          </p>
          <div
            className="
              rounded-tr-3xl
              rounded-bl-3xl
              rounded-tl-md
              rounded-br-md 
              bg-gray-100
              p-10
            "
          >
            <CardList items={items} />
            <PriceTable totalPrice={totalPrice} />
            <div className="mt-6">
              <PrimaryButton type="submit">Confirmar Pedido</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
