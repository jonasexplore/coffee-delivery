import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { CheckoutPage } from './pages/checkout';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};
