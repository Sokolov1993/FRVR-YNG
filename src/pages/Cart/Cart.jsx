import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import CartItem from '../../components/CartItem/CartItem';

import stylesCart from './Cart.module.scss';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemsInCart);

  const totalEstimate = cartItems.reduce(
    (acc, currentItem) => acc + currentItem.price * currentItem.quantity,
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
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                key={item.id}
              />
            ))
          ) : (
            <h2>YOU CART IS EMPTY</h2>
          )}
        </div>
        <div className={stylesCart.calc}>
          <p>
            <strong>Estimate Total: </strong>${totalEstimate.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
