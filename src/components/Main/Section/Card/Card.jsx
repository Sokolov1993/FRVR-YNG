import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteItemFromCart,
  setItemInCart,
} from '../../../../store/cart/cartReducer';

import Rating from '@mui/material/Rating';
import GroupIcon from '@mui/icons-material/Group';
import stylesCard from './Card.module.scss';

import Button from '../../../Button/Button';
import { BTN_CHILD_PROPS } from '../../../../constants/constants';

const Card = ({
  title,
  price,
  description,
  category,
  image,
  rating,
  ratingCount,
  id,
  allItem,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = cartItems.some((item) => item.id === id);
  const token = useSelector((state) => state.fetchLogIn.token);

  const [starsCount, setStarsCount] = useState(allItem?.rating?.rate);
  const [customersRateCount, setCustomersRateCount] = useState(
    allItem?.rating?.count
  );

  const onChangeHandler = (event) => {
    setCustomersRateCount(customersRateCount + 1);
    setStarsCount(
      (prevState) =>
        (+prevState * +customersRateCount + +event.target.value) /
        +customersRateCount
    );
  };

  const addToTheCartHandler = () => {
    isItemInCart
      ? dispatch(deleteItemFromCart(id))
      : dispatch(setItemInCart(allItem));
  };

  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.titles}>
        <h2>{title}</h2>
        <p>
          <strong>Price:</strong> ${price}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
      </div>

      <Link to={`/products/${id}`} className={stylesCard.image}>
        <img src={image} alt={description} />
      </Link>

      <div className={stylesCard.groupCountBtn}>
        <div className={stylesCard.count}>
          <GroupIcon />
          <span>{customersRateCount}</span>
          <Rating
            name="half-rating"
            value={starsCount}
            precision={0.5}
            onChange={onChangeHandler}
          />
        </div>
        {token ? (
          <Button onClick={addToTheCartHandler} isSecondaryTheme={isItemInCart}>
            {isItemInCart
              ? BTN_CHILD_PROPS.deleteFromCart
              : BTN_CHILD_PROPS.addToCart}
          </Button>
        ) : (
          <Button disabled>{BTN_CHILD_PROPS.loginToBuy}</Button>
        )}
      </div>
    </div>
  );
};

export default Card;
