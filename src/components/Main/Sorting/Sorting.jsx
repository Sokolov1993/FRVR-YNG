import React from 'react';

import stylesSorting from './Sorting.module.scss';

const Sorting = () => {
  const onChangehandler = (event) => {
    console.log(event.target.value);
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
          <option value="all">Show All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
