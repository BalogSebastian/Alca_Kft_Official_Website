import React from 'react';
import styles from './FurniturePartnerSliderComponent.module.css';
import FurniturePartnerSliderBaseComponent from './FurniturePartnerSliderBaseComponent.jsx';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import AranLogo from '../../assetes_for_logos/AranLogo.png'
import CreoLogo from '../../assetes_for_logos/CreoLogo.png';
import LubeLogo from '../../assetes_for_logos/LubeLogo.png';
import NobiliaLogo from '../../assetes_for_logos/NobiliaLogo.png';
import VertexLogo from '../../assetes_for_logos/VertexLogo.png';


const FurniturePartnerSliderComponent = () => {
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
            <FurniturePartnerSliderBaseComponent
              image={AranLogo}
              make='Aran'
            />
          </SwiperSlide>
          <SwiperSlide>
            <FurniturePartnerSliderBaseComponent
              image={VertexLogo}
              make='Vertex'
            />
          </SwiperSlide>
          <SwiperSlide>
            <FurniturePartnerSliderBaseComponent
              image={LubeLogo}
              make='Lube'
            />
          </SwiperSlide>
          <SwiperSlide>
            <FurniturePartnerSliderBaseComponent
              image={AranLogo}
              make='Aran'
            />
          </SwiperSlide>
          <SwiperSlide>
            <FurniturePartnerSliderBaseComponent
              image={VertexLogo}
              make='Vertex'
            />
          </SwiperSlide>
          <SwiperSlide>
            <FurniturePartnerSliderBaseComponent
              image={NobiliaLogo}
              make='Lube'
            />
          </SwiperSlide>
          <SwiperSlide>
            <FurniturePartnerSliderBaseComponent
              image={CreoLogo}
              make='Lube'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FurniturePartnerSliderComponent;