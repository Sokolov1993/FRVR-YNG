import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutItem from '../pages/AboutItem/AboutItem';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

const StoreRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products/:productId" element={<AboutItem />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
};

export default StoreRoutes;
