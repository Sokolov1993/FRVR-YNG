import React from 'react';

import SearchBar from '../Input/Input';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  isOpenAuthForm,
  logOut,
} from '../../api/requests/logIn/fetchLogInSlice';
import { openFavModal } from '../../store/favorites/favoritesSlice';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PortraitIcon from '@mui/icons-material/Portrait';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import stylesHeader from './Header.module.scss';

const Header = ({ data, onFormSubmit, showAllItems, isSearchHide }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.fetchLogIn.token);

  const countOfElementsInCart = useSelector(
    (state) => state.cart.itemsInCart.length
  );

  const countOfElementsInFav = useSelector(
    (state) => state.favorites.favorites.length
  );

  const resetSearchResult = () => {
    showAllItems([]);
  };

  const onOpenLogInForm = () => {
    dispatch(isOpenAuthForm(true));
  };

  const onLogOut = () => {
    dispatch(logOut());
  };

  const onOpenFavorites = () => {
    dispatch(openFavModal(true));
  };

  return (
    <header className={stylesHeader.header}>
      <div className={stylesHeader.wrapper}>
        <Link to="/" onClick={resetSearchResult}>
          <h1 className={stylesHeader.title}>FOREVER YOUNG</h1>
        </Link>
        {!isSearchHide && (
          <SearchBar
            type="search"
            theme="searchBar"
            placeholder={'Search'}
            data={data}
            onFormSubmit={onFormSubmit}
          />
        )}
        <nav className={stylesHeader.icons}>
          {token && (
            <Link to="/cart">
              <AddShoppingCartIcon />
              {countOfElementsInCart > 0 && (
                <span className={stylesHeader.countElementsInCart}>
                  {countOfElementsInCart}
                </span>
              )}
            </Link>
          )}
          <div onClick={onOpenLogInForm}>
            <PortraitIcon />
          </div>
          {token && (
            <div onClick={onLogOut} className={stylesHeader.loggedIn}>
              Log Out
            </div>
          )}
          <div onClick={onOpenFavorites}>
            <FavoriteBorderIcon />
            {countOfElementsInFav > 0 && (
              <span className={stylesHeader.countElementsInFav}>
                {countOfElementsInFav}
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
