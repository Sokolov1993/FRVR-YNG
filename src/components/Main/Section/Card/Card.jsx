import React from 'react';
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

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    console.log(id);
  };

  const addToTheCartHandler = () => {
    // console.log(id, 'added', allItem);
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
          <span>{ratingCount}</span>
          <Rating
            name="half-rating"
            defaultValue={rating}
            precision={0.5}
            onChange={onChangeHandler}
          />
        </div>
        <Button onClick={addToTheCartHandler}>
          {isItemInCart
            ? BTN_CHILD_PROPS.deleteFromCart
            : BTN_CHILD_PROPS.addToCart}
        </Button>
      </div>
    </div>
  );
};

export default Card;
