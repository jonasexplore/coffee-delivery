type Props = {
  quantity: number;
  setQuantity: (quantity: number) => void;
  min?: number;
  max?: number;
};

export const Counter = ({
  quantity,
  setQuantity,
  min = 1,
  max = 10,
}: Props) => {
  function onHandleCount(value: number) {
    const newCount = quantity + value;

    if (newCount < min || newCount > max) {
      return;
    }

    setQuantity(quantity + value);
  }

  return (
    <div
      className="
        flex 
        w-18 
        items-center 
        justify-between 
        rounded-md 
        bg-gray-200
        text-purple-900
      "
    >
      <button
        onClick={() => onHandleCount(-1)}
        className="
          px-2
        "
      >
        -
      </button>
      <span className="text-base">{quantity}</span>
      <button
        onClick={() => onHandleCount(1)}
        className="
          px-2
        "
      >
        +
      </button>
    </div>
  );
};
