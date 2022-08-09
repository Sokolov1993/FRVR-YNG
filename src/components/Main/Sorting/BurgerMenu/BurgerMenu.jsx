import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { openFavModal } from '../../../../store/favorites/favoritesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { isOpenAuthForm } from '../../../../api/requests/logIn/fetchLogInSlice';

import Hamburger from 'hamburger-react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import stylesBurgerMenu from './BurgerMenu.module.scss';

const BurgerMenu = ({ isDarkTheme }) => {
  const dispatch = useDispatch();
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const onOpenLogInForm = () => {
    dispatch(isOpenAuthForm(true));
  };

  const onOpenFavorites = () => {
    dispatch(openFavModal(true));
  };

  return (
    <div className={stylesBurgerMenu.burger}>
      <Hamburger
        size={40}
        color={isDarkTheme ? '#000' : '#fff'}
        label="Show menu"
        toggled={isBurgerOpen}
        toggle={setBurgerOpen}
      />
      {isBurgerOpen && (
        <div className={stylesBurgerMenu.burgerMenu}>
          <Link to="/cart">
            <AddShoppingCartIcon />
          </Link>
          <div onClick={onOpenLogInForm}>
            <PermIdentityIcon />
          </div>
          <div onClick={onOpenFavorites}>
            <FavoriteBorderIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
