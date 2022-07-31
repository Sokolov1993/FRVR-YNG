import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

const StoreRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products/:productId" />
    </Routes>
  );
};

export default StoreRoutes;
