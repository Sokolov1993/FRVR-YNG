import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import stylesCart from './Cart.module.scss';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemsInCart);

  const totalEstimate = cartItems.reduce(
    (acc, currentItem) => acc + currentItem.price,
    0
  );

  return (
    <div className={stylesCart.container}>
      <div className={stylesCart.wrapper}>
        <div className={stylesCart.title}>
          <h2>Shopping Cart</h2>
        </div>
        <div className={stylesCart.containerForItem}>
          <div className={stylesCart.titles}>
            <h4>Product Details</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
          </div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                title={item.title}
                image={item.image}
                price={item.price}
                key={item.id}
              />
            ))
          ) : (
            <h2>YOU CART IS AMPTY</h2>
          )}
        </div>
        <div className={stylesCart.calc}>
          <p>
            <strong>Estimate Total: </strong>${totalEstimate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
