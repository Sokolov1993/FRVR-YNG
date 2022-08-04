import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import {
  quantityIncrement,
  quantityDecrement,
} from '../../store/cart/cartReducer';

import Button from '../Button/Button';

import stylesCartItem from './CartItem.module.scss';

const CartItem = ({ title, image, price, id }) => {
  const dispath = useDispatch();
  const [counter, setCounter] = useState(1);

  const quantityOnincrement = () => {
    dispath(quantityIncrement(id));
    setCounter(counter + 1);
  };

  const quantityOnDecrement = () => {
    dispath(quantityDecrement(id));
    setCounter(counter - 1);
  };

  return (
    <div className={stylesCartItem.itemWrapper}>
      <div className={stylesCartItem.imageTitle}>
        <img src={image} alt={title} />
        <p>
          <strong>{title}</strong>
        </p>
      </div>

      <div className={stylesCartItem.quantity}>
        <Button onClick={quantityOnDecrement} disabled={counter < 1}>
          -
        </Button>
        <input type="number" max={100} step={1} value={counter} readOnly />
        <Button onClick={quantityOnincrement}>+</Button>
      </div>

      <div className={stylesCartItem.price}>${price}</div>
    </div>
  );
};

export default CartItem;
