import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from 'hamburger-react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import stylesBurgerMenu from './BurgerMenu.module.scss';

const BurgerMenu = ({ isDarkTheme }) => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

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
          <PermIdentityIcon />
          <FavoriteBorderIcon />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
