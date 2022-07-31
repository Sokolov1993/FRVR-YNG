import React from 'react';

import Slide_1 from '../../assets/images/swiper/slide_1.jpg';
import Slide_2 from '../../assets/images/swiper/slide_2.jpg';
import Slide_4 from '../../assets/images/swiper/slide_4.jpg';
import Slide_5 from '../../assets/images/swiper/slide_5.jpg';
import Slide_6 from '../../assets/images/swiper/slide_6.jpg';

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
            delay: 3500,
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
            <img src={Slide_1} alt="some img" />
            Slide_1
            <h2 className="title">
              FOREVER LA - <span> New Collection </span>
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide_2} alt="some img" />
            <h2 className="title">
              FOREVER <span> YNG </span>
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide_4} alt="some img" />
            <h2 className="title">
              FOREVER LA<span>SY - Order Delivery!</span>
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide_5} alt="some img" />
            <h2 className="title">
              FOREVER LA<span>ST Day Discount</span>
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide_6} alt="some img" />
            <h2 className="title">
              FOREVER YNG<span> New Shop In Hollywood</span>
            </h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
