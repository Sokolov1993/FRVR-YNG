import React from 'react';
import Section from './Section/Section';
import Sorting from './Sorting/Sorting';
import Swiper from '../Swiper/Swiper';

import stylesMain from './Main.module.scss';

const Main = () => {
  return (
    <main>
      <Sorting />
      <Swiper />
      <Section />
    </main>
  );
};

export default Main;
