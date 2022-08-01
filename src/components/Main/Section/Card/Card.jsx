import React from 'react';
import { Link } from 'react-router-dom';

import Rating from '@mui/material/Rating';
import GroupIcon from '@mui/icons-material/Group';
import stylesCard from './Card.module.scss';

import Button from '../../../Button/Button';

const Card = ({
  title,
  price,
  description,
  category,
  image,
  rating,
  ratingCount,
  id,
}) => {
  // localStorage.setItem(
  //   `${id}`,
  //   JSON.stringify({
  //     ratingCount: +(Math.random() * 200).toFixed(0),
  //     rating: +(Math.random() * 10).toFixed(0),
  //     sumRating: ratingCount * rating,
  //   })
  // );

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    console.log(id);

    // const obj = JSON.parse(localStorage.getItem(`${id}`));
    // console.log(obj);
    // obj.ratingCount += 1;
    // obj.sumRating += +event.target.value;
    // localStorage.setItem(`${id}`, JSON.stringify(obj));
  };

  const addToTheCartHandler = () => {
    console.log(id, 'added');
  };

  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.titles}>
        {/* <p>{unicId}</p> */}
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
        <Button onClick={addToTheCartHandler}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default Card;
