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

type CheckoutInitialProps = {
  cep: string;
  address: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  paymentType: string;
};

type Order = {
  id: string;
} & CheckoutInitialProps;

type OrderState = {
  orders: Order[];
};

type AddOrder = Order;

export type {
  Coffee,
  CheckoutState,
  CoffeeState,
  CoffeeItem,
  AddCoffee,
  RemoveCoffee,
  CheckoutInitialProps,
  OrderState,
  AddOrder,
};
