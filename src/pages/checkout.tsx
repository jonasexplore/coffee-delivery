import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import icons from '../assets/icons';
import { PrimaryButton } from '../components/buttons/primary';
import { CardList } from '../components/card-list';
import { Input } from '../components/input';
import { PaymentList } from '../components/payment-list';
import { HeaderLayout } from '../layouts/header';
import { RootState } from '../store';

export const CheckoutPage = () => {
  const formik = useFormik({
    initialValues: {
      cep: '',
      address: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { items } = useSelector((state: RootState) => state.checkout);

  const totalPrice = items
    .reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
    .toFixed(2);

  const { values, handleChange, handleSubmit } = formik;

  return (
    <HeaderLayout>
      <div className="mt-10 mb-4 grid grid-cols-6-4 gap-x-8">
        <div className="flex flex-col">
          <p className="mb-4 font-baloo text-lg font-bold">
            Complete seu pedido
          </p>
          <div className="flex flex-col gap-3">
            <div className="rounded-md bg-gray-100">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-4 p-10">
                  <div className="mb-4 flex gap-2">
                    <div>
                      <img src={icons.mark} alt="" />
                    </div>
                    <div>
                      <h3>Endereço de Entrega</h3>
                      <p className="text-sm">
                        Informe o endereço onde deseja receber seu pedido
                      </p>
                    </div>
                  </div>
                  <div>
                    <Input
                      name="cep"
                      id="cep"
                      type="text"
                      placeholder="CEP"
                      onChange={handleChange}
                      value={values.cep}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Rua"
                      onChange={handleChange}
                      value={values.address}
                      className="w-full"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Input
                      type="number"
                      id="number"
                      name="number"
                      placeholder="Número"
                      onChange={handleChange}
                      value={values.number}
                    />
                    <Input
                      type="text"
                      id="complement"
                      name="complement"
                      placeholder="Complemento"
                      onChange={handleChange}
                      value={values.complement}
                      className="w-full"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Input
                      type="text"
                      id="district"
                      name="district"
                      placeholder="Bairro"
                      onChange={handleChange}
                      value={values.district}
                    />
                    <Input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Cidade"
                      onChange={handleChange}
                      value={values.city}
                    />
                    <Input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="UF"
                      min={2}
                      max={2}
                      onChange={handleChange}
                      value={values.state}
                    />
                  </div>
                </div>
              </form>
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
                <PaymentList />
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
            <div className="mt-6">
              <PrimaryButton>Confirmar Pedido</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};
