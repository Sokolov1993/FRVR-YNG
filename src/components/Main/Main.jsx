import React from 'react';

import { useSelector } from 'react-redux';

import Section from './Section/Section';
import Sorting from './Sorting/Sorting';
import LoginForm from '../LoginForm/LoginForm';
import Favorites from '../Favorites/Favorites';

import SwiperComponent from '../Swiper/SwiperComponent';

import stylesMain from './Main.module.scss';

const Main = ({ setFilterData, data, showMoreOnClickHandler, searchData }) => {
  const isOpenAuthForm = useSelector(
    (state) => state.fetchLogIn.isOpenAuthForm
  );
  const isOpenFav = useSelector((state) => state.favorites.openFavModal);

  return (
    <main>
      {isOpenAuthForm && <LoginForm />}
      {isOpenFav && <Favorites />}
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
