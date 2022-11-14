import { useSelector } from 'react-redux';

import { Banner } from '@/components/banner';
import { Card } from '@/components/card';
import { HeaderLayout } from '@/layouts/header';
import { RootState } from '@/store';

export const HomePage = () => {
  const { items } = useSelector((state: RootState) => state.coffee);

  return (
    <HeaderLayout>
      <Banner />
      <h2 className="mb-9 font-baloo text-3xl font-extrabold">Nossos cafés</h2>
      <div className="mb-14 flex items-center justify-center">
        <div
          className="
            grid
            w-full
            gap-10
            sm:grid-cols-1
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {items.map((coffee, index) => (
            <Card coffee={coffee} key={index} />
          ))}
        </div>
      </div>
    </HeaderLayout>
  );
};
