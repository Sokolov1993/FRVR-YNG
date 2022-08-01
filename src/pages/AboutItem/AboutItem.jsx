import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { instance } from '../../api';

import stylesAboutItem from './AboutItem.module.scss';

const AboutItem = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  console.log(productId);

  const fetchData = () => {
    instance
      .get(`/${productId}`)
      .then((product) => setProduct(product.data))
      .catch((err) => {
        console.log(err);
      });
    console.log(product);
  };

  useEffect(fetchData, []);

  return (
    <>
      <Header />
      <div className={stylesAboutItem.container}>
        <div className={stylesAboutItem.wrapper}>
          <div className={stylesAboutItem.itemImg}>
            <img src={product.image} alt={product.description} />
          </div>
          <div className={stylesAboutItem.titles}>
            <h2>{product.title}</h2>
            <p>
              <strong> Category:</strong> {product.category}
            </p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutItem;
