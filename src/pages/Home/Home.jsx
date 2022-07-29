import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { instance } from '../../api/index';

import stylesHome from './Home.module.scss';

const Home = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [showMore, setShowMore] = useState(6);
  const [filterData, setFilterData] = useState('');

  const onSearchResult = (searchData) => {
    console.log(searchData);
    setSearchData(searchData);
  };
  console.log(data);

  useEffect(() => {
    instance
      .get(`${filterData && filterData}`, { params: { limit: showMore } })
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [showMore, filterData, searchData]);

  const showMoreOnClickHandler = (event) => {
    if (event.target.textContent.toLowerCase() === 'show more') {
      setShowMore((prevState) => (prevState < 20 ? prevState + 6 : 0));
    } else {
      setSearchData([]);
    }
  };

  return (
    <div>
      <Header
        data={data}
        onFromSubmit={onSearchResult}
        showAllItems={setSearchData}
      />
      <Main
        showMoreOnClickHandler={showMoreOnClickHandler}
        data={data}
        searchData={searchData}
        setFilterData={setFilterData}
      />
    </div>
  );
};

export default Home;
