import React, { useState, useEffect } from 'react';
import { instance } from '../../api/index';
import Section from './Section/Section';
import Sorting from './Sorting/Sorting';
import SwiperComponent from '../Swiper/SwiperComponent';

import stylesMain from './Main.module.scss';

const Main = () => {
  const [data, setData] = useState({});
  const [showMore, setShowMore] = useState(5);
  const [filterData, setFilterData] = useState('');

  console.log(data);

  useEffect(() => {
    instance
      .get(`${filterData && filterData}`, { params: { limit: showMore } })
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [showMore, filterData]);

  const onClickHandler = () => {
    setShowMore((prevState) => (prevState < 20 ? prevState + 5 : 0));
  };

  return (
    <main>
      <Sorting setFilterData={setFilterData} />
      <SwiperComponent />
      <Section data={data} onClickHandler={onClickHandler} />
    </main>
  );
};

export default Main;
