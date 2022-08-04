import React from 'react';

import { useSelector } from 'react-redux/es/hooks/useSelector';

import Button from '../../Button/Button';
import Card from './Card/Card';
import { BTN_CHILD_PROPS } from '../../../constants/constants';
import Pending from './Pending/Pending';

import stylesSection from './Section.module.scss';

const Section = ({ data, onClickHandler, searchData }) => {
  const pending = useSelector((state) => state.fetchProducts.pending);

  if (pending) {
    return (
      <div className={stylesSection.pending}>
        <Pending />
      </div>
    );
  }

  return (
    <section className={stylesSection.section}>
      <div className={stylesSection.wrapper}>
        {(searchData.length > 0 ? searchData : data).map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rating={item.rating.rate}
            ratingCount={item.rating.count}
            allItem={item}
          />
        ))}
      </div>
      <div className={stylesSection.showMore}>
        <Button onClick={onClickHandler}>
          {searchData.length > 0
            ? BTN_CHILD_PROPS.showAll
            : BTN_CHILD_PROPS.showMore}
        </Button>
      </div>
    </section>
  );
};

export default Section;
