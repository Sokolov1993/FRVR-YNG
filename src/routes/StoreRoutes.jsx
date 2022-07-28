import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

const StoreRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default StoreRoutes;
