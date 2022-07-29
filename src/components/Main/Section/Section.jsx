import React from 'react';

import Button from '../../Button/Button';
import Card from './Card/Card';

import stylesSection from './Section.module.scss';

const Section = ({ data, onClickHandler }) => {
  return (
    <section className={stylesSection.section}>
      <div className={stylesSection.wrapper}>
        {data.length > 0 &&
          data.map((item) => (
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
        <Button onClick={onClickHandler}>Show More</Button>
      </div>
    </section>
  );
};

export default Section;
