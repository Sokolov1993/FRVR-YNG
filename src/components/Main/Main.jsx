import React from 'react';

import Section from './Section/Section';
import Sorting from './Sorting/Sorting';
import SwiperComponent from '../Swiper/SwiperComponent';

import { useSelector, useDispatch } from 'react-redux';
import { fetchLogIn } from '../../api/requests/logIn/fetchLogIn';

import stylesMain from './Main.module.scss';
import LoginForm from '../LoginForm/LoginForm';

const Main = ({ setFilterData, data, showMoreOnClickHandler, searchData }) => {
  const isOpenAuthForm = useSelector(
    (state) => state.fetchLogIn.isOpenAuthForm
  );

  return (
    <main>
      {isOpenAuthForm && <LoginForm />}
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
