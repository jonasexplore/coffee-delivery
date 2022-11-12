import { Icon } from '../icon';

const advantages = [
  {
    label: 'Compra simples e segura',
    img: './icons/cart.png',
  },
  {
    label: 'Embalagem mantém o café intacto',
    img: './icons/package.png',
  },
  {
    label: 'Entrega rápida e rastreada',
    img: './icons/clock.png',
  },
  {
    label: 'O café chega fresquinho até você',
    img: './icons/coffee.png',
  },
];

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
            blur-3xl
          "
      ></div>
      <div className="grid grid-cols-2">
        <div className="col-auto">
          <h1 className="mb-4 font-baloo text-5xl font-extrabold">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mb-16 text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            {advantages.map(({ img, label }) => (
              <Icon img={img} label={label} />
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <img src="./coffee-delivery.png" alt="" />
        </div>
      </div>
    </div>
  );
};
