import icons from '../../assets/icons';
import { Button } from '../buttons';

export const Header = () => {
  return (
    <div className="flex h-9 justify-between">
      <div className="flex-1">
        <img src={icons.logo} />
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
        <Button.Cart variant="header" quantity={10} />
      </div>
    </div>
  );
};
