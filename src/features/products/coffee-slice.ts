import { createSlice } from '@reduxjs/toolkit';

import { Coffee, CoffeeState } from '@/types';

const coffees: Coffee[] = [
  {
    id: '1',
    img: './coffees/1.png',
    tags: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '2',
    img: './coffees/2.png',
    tags: ['TRADICIONAL'],
    title: 'Expresso Americano',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '3',
    img: './coffees/3.png',
    tags: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '4',
    img: './coffees/4.png',
    tags: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Gelado',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '5',
    img: './coffees/5.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com Leite',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '6',
    img: './coffees/6.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Latte',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '7',
    img: './coffees/7.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Capuccino',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '8',
    img: './coffees/8.png',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Macciato',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
];

const initialState: CoffeeState = {
  items: coffees,
};

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {},
});

export default coffeeSlice.reducer;
