import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import {
  quantityIncrement,
  quantityDecrement,
} from '../../store/cart/cartReducer';

import Button from '../Button/Button';

import stylesCartItem from './CartItem.module.scss';

const CartItem = ({ title, image, price, id, quantity }) => {
  const dispath = useDispatch();

  const quantityOnincrement = () => {
    dispath(quantityIncrement(id));
  };

  const quantityOnDecrement = () => {
    dispath(quantityDecrement(id));
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
        <Button onClick={quantityOnDecrement} disabled={quantity < 1}>
          -
        </Button>
        <input type="number" max={100} step={1} value={quantity} readOnly />
        <Button onClick={quantityOnincrement}>+</Button>
      </div>

      <div className={stylesCartItem.price}>${price}</div>
    </div>
  );
};

export default CartItem;
