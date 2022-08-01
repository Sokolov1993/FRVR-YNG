import React from 'react';
import SearchBar from '../Input/Input';
import { Link } from 'react-router-dom';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import stylesHeader from './Header.module.scss';

const Header = ({ data, onFromSubmit, showAllItems }) => {
  const resetSearchResult = () => {
    showAllItems([]);
  };
  return (
    <header className={stylesHeader.header}>
      <div className={stylesHeader.wrapper}>
        <Link to="/" onClick={resetSearchResult}>
          <h1 className={stylesHeader.title}>FOREVER YOUNG</h1>
        </Link>
        <SearchBar
          type="search"
          theme="searchBar"
          placeholder={'Search'}
          btn={true}
          data={data}
          onFromSubmit={onFromSubmit}
        />
        <nav className={stylesHeader.icons}>
          <Link to="/cart">
            <AddShoppingCartIcon />
          </Link>
          <PermIdentityIcon />
          <FavoriteBorderIcon />
        </nav>
      </div>
    </header>
  );
};

export default Header;
