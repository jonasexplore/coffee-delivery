import { useState } from 'react';

type Props = {
  min?: number;
  max?: number;
};

export const Counter = ({ min = 1, max = 10 }: Props) => {
  const [count, setCount] = useState(1);

  function onHandleCount(value: number) {
    const newCount = count + value;

    if (newCount < min || newCount > max) {
      return;
    }

    setCount(count + value);
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
      <span className="text-base">{count}</span>
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
