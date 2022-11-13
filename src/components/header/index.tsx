import icons from '../../assets/icons';
import { Buttons } from '../buttons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { items } = useSelector((state: RootState) => state.checkout);
  const navigate = useNavigate();

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex h-9 justify-between">
      <div className="flex-1 cursor-pointer">
        <img src={icons.logo} onClick={() => navigate('/')} />
      </div>
      <div className="flex gap-3">
        <div
          className="
              flex
              items-center
              justify-center
              rounded-md
              bg-purple-300
              py-3
              px-2
            "
        >
          <div>
            <img className="text-sm" src={icons.spot} />
          </div>
          <p className="text-purple-800">Porto Alegre, RS</p>
        </div>
        <Buttons.Cart
          variant="header"
          quantity={totalQuantity}
          onClick={() => navigate('/checkout')}
        />
      </div>
    </div>
  );
};
