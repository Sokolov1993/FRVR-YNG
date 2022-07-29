import React from 'react';

import stylesSorting from './Sorting.module.scss';

const Sorting = ({ setFilterData }) => {
  const onChangehandler = (event) => {
    console.log(event.target.value);
    setFilterData(event?.target?.value);
  };

  return (
    <div className={stylesSorting.container}>
      <div className={stylesSorting.wrapper}>
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
