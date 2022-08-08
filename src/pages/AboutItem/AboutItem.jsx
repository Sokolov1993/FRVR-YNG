import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchProduct } from '../../api/requests/fetchProduct/fetchProduct';
import { setSearchData } from '../../store/searchData/searchDataSlice';
import {
  deleteItemFromCart,
  setItemInCart,
} from '../../store/cart/cartReducer';
import { addToFavorites } from '../../store/favorites/favoritesSlice';

import LoginForm from '../../components/LoginForm/LoginForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BTN_CHILD_PROPS } from '../../constants/constants';
import Favorites from '../../components/Favorites/Favorites';

import stylesAboutItem from './AboutItem.module.scss';
import Section from '../../components/Main/Section/Section';
import Button from '../../components/Button/Button';
import BurgerMenu from '../../components/Main/Sorting/BurgerMenu/BurgerMenu';

const AboutItem = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const pending = useSelector((state) => state.fetchProduct.pending);
  const product = useSelector((state) => state.fetchProduct.data);
  const searchData = useSelector((state) => state.searchData.searchData);

  const cartItems = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = cartItems.some((item) => item.id === +productId);

  const isOpenAuthForm = useSelector(
    (state) => state.fetchLogIn.isOpenAuthForm
  );

  const isOpenFavModal = useSelector((state) => state.favorites.openFavModal);

  // console.log('Fav Open?', isOpenFavModal);

  // console.log(`product`, product);

  const addToTheCartHandler = () => {
    // console.log(id, 'added', allItem);
    isItemInCart
      ? dispatch(deleteItemFromCart(+productId))
      : dispatch(setItemInCart(product));
  };

  const addToTheFavHandler = () => {
    // console.log(product);
    dispatch(addToFavorites(product));
  };
  // console.log('about item. ProductID:', productId, 'product:', product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
    dispatch(setSearchData([]));
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
      {isOpenFavModal && <Favorites />}
      {isOpenAuthForm && <LoginForm />}
      <div className={stylesAboutItem.burger}>
        <BurgerMenu isDarkTheme />
      </div>
      <Header />
      {!searchData?.length > 0 ? (
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
              <div className={stylesAboutItem.buttons}>
                <Button
                  onClick={addToTheCartHandler}
                  isSecondaryTheme={isItemInCart}
                >
                  {isItemInCart
                    ? BTN_CHILD_PROPS.deleteFromCart
                    : BTN_CHILD_PROPS.addToCart}
                </Button>
                <div
                  className={stylesAboutItem.favButton}
                  onClick={addToTheFavHandler}
                >
                  <FavoriteBorderIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Section searchData={searchData} isBtnHide />
      )}
      <Footer />
    </>
  );
};

export default AboutItem;
