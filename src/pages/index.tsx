import { Banner } from '../components/banner';
import { Card } from '../components/card';
import { Header } from '../components/header';
import { Coffee } from '../types';

const coffees: Coffee[] = [
  {
    img: './coffees/1.png',
    tags: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    img: './coffees/2.png',
    tags: ['TRADICIONAL'],
    title: 'Expresso Americano',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    img: './coffees/3.png',
    tags: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    img: './coffees/4.png',
    tags: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Gelado',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    img: './coffees/5.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com Leite',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    img: './coffees/6.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Latte',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    img: './coffees/7.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Capuccino',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    img: './coffees/8.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Macciato',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
];

export const Home = () => {
  return (
    <div className="m-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="mb-8">
          <Header />
        </div>
        <Banner />
        <h2 className="mb-9 font-baloo text-3xl font-extrabold">
          Nossos cafés
        </h2>
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
            {coffees.map((coffee) => (
              <Card coffee={coffee} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
