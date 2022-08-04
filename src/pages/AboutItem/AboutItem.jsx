import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchProduct } from '../../api/requests/fetchProduct/fetchProduct';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CircularProgress from '@mui/material/CircularProgress';

import stylesAboutItem from './AboutItem.module.scss';

const AboutItem = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.fetchProduct.data);
  const pending = useSelector((state) => state.fetchProduct.pending);
  // console.log('about item. ProductID:', productId, 'product:', product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId]);

  if (pending) {
    return (
      <div className={stylesAboutItem.pending}>
        <CircularProgress color="inherit" />
      </div>
    );
  }

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
      <Footer />
    </>
  );
};

export default AboutItem;
