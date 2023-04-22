import React from 'react';
import styles from './KitchenAccessorysSliderComponent.module.css';
import KitchenAccessorysSliderBaseComponent from './KitchenAccessorysSliderBaseComponent.jsx';

//import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import blanco_logo from "../../kitchen_accessorys_assets/blanco_logo.png"
import dyson_logo from "../../kitchen_accessorys_assets/dyson_logo.png";
import grohe_logo from "../../kitchen_accessorys_assets/grohe_logo.png";
import schock_logo from "../../kitchen_accessorys_assets/schoch_logo.png";
import teka_logo from "../../kitchen_accessorys_assets/teka_logo.png";

const KitchenAccessorysSliderComponent = () => {
  return (
    <div className={styles.find}>
    <div className={styles.heading}>
      <h1>Partnereink</h1>
      <div className={styles.text_bg}>
        <p>
          <span> A bizalom a legfontosabb </span>
        </p>
      </div>
    </div>
    <div className={styles.slider_container}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        breakpoints={{
          340: {
            width: 600,
            slidesPerView: 1,
            allowSlideNext: true,
            slidesPerGroup: 1,
            spaceBetween: 20,
            slidesPerColumn: 1,
          },
          768: {
            width: 968,
            slidesPerView: 3,
            allowSlideNext: true,
            slidesPerGroup: 3,
            spaceBetween: 20,
            slidesPerColumn: 1,
          },
          1040: {
            width: 1040,
            slidesPerView: 5,
            allowSlideNext: true,
            slidesPerGroup: 5,
            spaceBetween: 20,
            slidesPerColumn: 1,
          },
        }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={false}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <KitchenAccessorysSliderBaseComponent
            image={dyson_logo}
            make='Aran'
          />
        </SwiperSlide>
        <SwiperSlide>
          <KitchenAccessorysSliderBaseComponent
            image={teka_logo}
            make='Vertex'
          />
        </SwiperSlide>
        <SwiperSlide>
          <KitchenAccessorysSliderBaseComponent
            image={blanco_logo}
            make='Lube'
          />
        </SwiperSlide>
        <SwiperSlide>
          <KitchenAccessorysSliderBaseComponent
            image={grohe_logo}
            make='Aran'
          />
        </SwiperSlide>
        <SwiperSlide>
          <KitchenAccessorysSliderBaseComponent
            image={teka_logo}
            make='Vertex'
          />
        </SwiperSlide>
        <SwiperSlide>
          <KitchenAccessorysSliderBaseComponent
            image={schock_logo}
            make='Lube'
          />
        </SwiperSlide>
        <SwiperSlide>
          <KitchenAccessorysSliderBaseComponent
            image={dyson_logo}
            make='Lube'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
);
}


export default KitchenAccessorysSliderComponent;
