import React from 'react';
import { useParams } from 'react-router-dom';

import stylesAboutItem from './AboutItem.module.scss';

const AboutItem = () => {
  const { itemId } = useParams();
  return <div></div>;
};

export default AboutItem;
