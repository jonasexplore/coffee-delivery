import { advantages } from './data';

import { Icon } from '../icon';

export const Banner = () => {
  return (
    <div className="relative my-24">
      <div
        className="
            absolute
            top-0
            left-0
            h-full
            w-full
            bg-home
            blur-xl
          "
      ></div>
      <div className="grid sx:grid-cols-1 sm:grid-cols-2">
        <div className="col-auto">
          <h1 className="mb-4 font-baloo text-5xl font-extrabold">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mb-16 text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            {advantages.map(({ img, label }, index) => (
              <Icon img={img} label={label} key={index} />
            ))}
          </div>
        </div>
        <div className="flex justify-end sx:hidden sm:flex">
          <img src="./coffee-delivery.png" alt="" />
        </div>
      </div>
    </div>
  );
};
