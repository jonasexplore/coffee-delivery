import icons from '../../../assets/icons';

export const ButtonVariant = () => (
  <button
    className="
        w-18
        flex
        items-center
        rounded
        bg-purple-900
        p-2
        transition
        hover:bg-purple-700
      "
  >
    <img src={icons.cart} alt="" />
  </button>
);
