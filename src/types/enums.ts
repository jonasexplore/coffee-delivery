enum Payments {
  CREDIT = 'credit',
  DEBIT = 'debit',
  CASH = 'cash',
}

const PaymentLabels = {
  [Payments.CREDIT]: 'Cartão de crédito',
  [Payments.DEBIT]: 'Cartão de débito',
  [Payments.CASH]: 'Dinheiro',
};

export { Payments, PaymentLabels };
