import React from 'react';
import SearchBar from '../Input/Input';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import stylesHeader from './Header.module.scss';

const Header = () => {
  return (
    <header className={stylesHeader.header}>
      <div className={stylesHeader.wrapper}>
        <h1 className={stylesHeader.title}>FOREVER YOUNG</h1>
        <SearchBar
          type="search"
          style="searchBar"
          placeholder={'Search'}
          btn={true}
        />
        <nav className={stylesHeader.icons}>
          <AddShoppingCartIcon />
          <PermIdentityIcon />
          <FavoriteBorderIcon />
        </nav>
      </div>
    </header>
  );
};

export default Header;
