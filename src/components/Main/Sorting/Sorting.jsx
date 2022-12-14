import React from 'react';

import BurgerMenu from './BurgerMenu/BurgerMenu';

import stylesSorting from './Sorting.module.scss';

const Sorting = ({ setFilterData }) => {
  const onChangehandler = (event) => {
    setFilterData(event?.target?.value);
  };

  return (
    <div className={stylesSorting.container}>
      <div className={stylesSorting.wrapper}>
        <BurgerMenu />
        <select
          onChange={onChangehandler}
          className={stylesSorting.select}
          name="select"
          id="select"
        >
          <option value="/">Show All</option>
          <option value="/category/electronics">Electronics</option>
          <option value="/category/jewelery">Jewelery</option>
          <option value="/category/men's clothing">Men's clothing</option>
          <option value="/category/women's clothing">Women's clothing</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
