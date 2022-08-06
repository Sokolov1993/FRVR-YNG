import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchProducts } from '../../api/requests/fetchProducts/fetchProducts';

import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { BTN_CHILD_PROPS } from '../../constants/constants';
import Footer from '../../components/Footer/Footer';

import stylesHome from './Home.module.scss';

const Home = () => {
  const [searchData, setSearchData] = useState([]);
  const [showMore, setShowMore] = useState(6);
  const [filterData, setFilterData] = useState('');

  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchProducts.data);

  // console.log('products, panding', data, pending);

  const onSearchResult = (searchData) => {
    console.log(searchData);
    setSearchData(searchData);
  };
  // console.log(data);

  useEffect(() => {
    dispatch(
      fetchProducts({
        endpoint: `/products${filterData && filterData}`,
        paramShowMore: `${showMore}`,
      })
    );
  }, [showMore, filterData, searchData]);

  const showMoreOnClickHandler = (event) => {
    if (event.target.textContent === BTN_CHILD_PROPS.showMore) {
      setShowMore((prevState) => (prevState < 20 ? prevState + 6 : 0));
    } else {
      setSearchData([]);
    }
  };

  return (
    <div>
      <Header
        onFormSubmit={onSearchResult}
        showAllItems={setSearchData}
        data={data}
      />
      <Main
        showMoreOnClickHandler={showMoreOnClickHandler}
        data={data}
        searchData={searchData}
        setFilterData={setFilterData}
      />
      <Footer />
    </div>
  );
};

export default Home;
