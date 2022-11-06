import icons from '../../../assets/icons';

type Props = {
  quantity: number;
};

export const HeaderVariant = ({ quantity = 0 }: Props) => (
  <div>
    {quantity && <div>{quantity}</div>}
    <button
      className="
        w-18
        flex
        items-center
        rounded
        bg-orange-200
        p-2
        transition
        hover:bg-orange-300
      "
    >
      <img className="fill-orange-500" src={icons.cart} alt="" />
    </button>
  </div>
);
