import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import icons from '@/assets/icons';
import { RootState } from '@/store';

import { Buttons } from '../buttons';

export const Header = () => {
  const { items } = useSelector((state: RootState) => state.checkout);
  const navigate = useNavigate();

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex h-9 justify-between">
      <NavLink className="flex-1 cursor-pointer" to="/">
        <img src={icons.logo} alt="logo" />
      </NavLink>
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
            <img className="text-sm" src={icons.spot} alt="spot icon" />
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
