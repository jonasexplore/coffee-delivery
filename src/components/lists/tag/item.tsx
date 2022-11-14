import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const TagItem = ({ children }: Props) => (
  <div
    className="
        my-3
        rounded-xl
        bg-orange-200
        px-2
        py-1
        text-center
        text-xs
        font-bold
        text-orange-400
      "
  >
    <div>{children}</div>
  </div>
);
