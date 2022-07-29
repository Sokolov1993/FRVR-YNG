import React from 'react';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';

import './SwiperComponent.scss';

const SwiperComponent = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Swiper
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className="swiper"
        >
          <SwiperSlide>
            <img
              src={require('../../assets/images/swiper/slide_1.jpg')}
              alt="some img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../assets/images/swiper/slide_2.jpg')}
              alt="some img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../assets/images/swiper/slide_3.jpg')}
              alt="some img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../assets/images/swiper/slide_4.jpg')}
              alt="some img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../assets/images/swiper/slide_5.jpg')}
              alt="some img"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
