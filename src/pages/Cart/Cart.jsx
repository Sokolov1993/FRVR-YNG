import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import stylesCart from './Cart.module.scss';

const Cart = () => {
  const counter = useSelector((state) => state.counterReducer.counter);

  return (
    <div className={stylesCart.container}>
      <div className={stylesCart.wrapepr}>{counter}</div>
    </div>
  );
};

export default Cart;
