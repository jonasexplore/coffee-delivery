type Coffee = {
  id: string;
  img: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
};

type CoffeeItem = {
  id: string;
  quantity: number;
  price: number;
};

type CheckoutState = {
  items: CoffeeItem[];
};

type CoffeeState = {
  items: Coffee[];
};

type AddCoffee = {
  id: string;
  quantity: number;
  price: number;
};

type RemoveCoffee = {
  id: string;
};

export type {
  Coffee,
  CheckoutState,
  CoffeeState,
  CoffeeItem,
  AddCoffee,
  RemoveCoffee,
};
