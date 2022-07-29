import React from 'react';

import Section from './Section/Section';
import Sorting from './Sorting/Sorting';
import SwiperComponent from '../Swiper/SwiperComponent';

import stylesMain from './Main.module.scss';

const Main = ({ setFilterData, data, showMoreOnClickHandler, searchData }) => {
  console.log('main', data);
  return (
    <main>
      <Sorting setFilterData={setFilterData} />
      <SwiperComponent />
      <Section
        data={data}
        searchData={searchData}
        onClickHandler={showMoreOnClickHandler}
      />
    </main>
  );
};

export default Main;
