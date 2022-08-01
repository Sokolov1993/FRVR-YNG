import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutItem from '../pages/AboutItem/AboutItem';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';

const StoreRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products/:productId" element={<AboutItem />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default StoreRoutes;
