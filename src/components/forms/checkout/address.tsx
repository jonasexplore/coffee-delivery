import icons from '@/assets/icons';
import { Input } from '@/components/input';
import { CheckoutInitialProps } from '@/types';

type Props = {
  values: CheckoutInitialProps;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AddressFields = ({ values, handleChange }: Props) => {
  return (
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
          required
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
          required
          type="text"
          id="address"
          name="address"
          placeholder="Rua"
          onChange={handleChange}
          value={values.address}
          className="w-full"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <Input
          required
          type="text"
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
      <div className="flex flex-wrap gap-3">
        <Input
          required
          type="text"
          id="district"
          name="district"
          placeholder="Bairro"
          onChange={handleChange}
          value={values.district}
        />
        <Input
          required
          type="text"
          id="city"
          name="city"
          placeholder="Cidade"
          onChange={handleChange}
          value={values.city}
        />
        <Input
          required
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
  );
};
