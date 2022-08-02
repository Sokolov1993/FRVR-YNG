import React from 'react';

import stylesCartItem from './CartItem.module.scss';

const CartItem = ({ title, image, price }) => {
  return (
    <div className={stylesCartItem.itemWrapper}>
      <div className={stylesCartItem.imageTitle}>
        <img src={image} alt={title} />
        <p>
          <strong>{title}</strong>
        </p>
      </div>

      <div className={stylesCartItem.quantity}>
        <span>-</span> <p>0</p> <span>+</span>
      </div>

      <div className={stylesCartItem.price}>${price}</div>
    </div>
  );
};

export default CartItem;
