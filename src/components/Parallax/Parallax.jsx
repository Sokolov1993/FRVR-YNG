import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import stylesParallax from './Parallax.module.scss';

const ParallaxComponent = () => {
  return (
    <Parallax
      translateY={[-70, 70]}
      className={stylesParallax.parallax}
    ></Parallax>
  );
};

export default ParallaxComponent;
