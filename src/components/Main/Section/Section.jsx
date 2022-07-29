import React from 'react';

import Button from '../../Button/Button';
import Card from './Card/Card';

import stylesSection from './Section.module.scss';

const Section = ({ data, onClickHandler, searchData }) => {
  return (
    <section className={stylesSection.section}>
      <div className={stylesSection.wrapper}>
        {(searchData.length > 0 ? searchData : data).map((item) => (
          <Card
            key={item.id}
            unicId={Math.random()}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rating={item.rating.rate}
            ratingCount={item.rating.count}
          />
        ))}
      </div>
      <div className={stylesSection.showMore}>
        <Button onClick={onClickHandler}>
          {searchData.length > 0 ? `Show all` : `Show More`}
        </Button>
      </div>
    </section>
  );
};

export default Section;
