import React from 'react';

import Rating from '@mui/material/Rating';
import GroupIcon from '@mui/icons-material/Group';
import stylesCard from './Card.module.scss';

const Card = ({
  unicId,
  title,
  price,
  description,
  category,
  image,
  rating,
  ratingCount,
}) => {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.titles}>
        <p>{unicId}</p>
        <h2>{title}</h2>
        <p>
          <strong>Price:</strong> ${price}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
      </div>

      <div className={stylesCard.image}>
        <img src={image} alt={description} />
      </div>
      {/* <p>{description}</p> */}
      {/* <p>{rating}</p> */}

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
    </div>
  );
};

export default Card;
