import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages';
import { CheckoutPage } from './pages/checkout';
import { SuccessPage } from './pages/success';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/success/:id" element={<SuccessPage />} />
    </Routes>
  );
};
