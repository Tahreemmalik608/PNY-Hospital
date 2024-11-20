import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

import '../styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Carousel = () => {
  return (
     <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide><img src='https://indushospital.org.pk/wp-content/uploads/2024/04/expansion-banner.jpg'  /></SwiperSlide>
    <SwiperSlide><img src='https://indushospital.org.pk/wp-content/uploads/2024/05/Indus-Zindagi-Homepage-Web-Banner.jpg'/></SwiperSlide>
    <SwiperSlide><img src='https://indushospital.org.pk/wp-content/uploads/2024/02/Zakat-home-banner.jpg'/></SwiperSlide>
    <SwiperSlide><img src="https://indushospital.org.pk/wp-content/uploads/2024/03/MariyamBanner-1.jpg" /></SwiperSlide>
    <SwiperSlide><img src='https://indushospital.org.pk/wp-content/uploads/2024/03/ZakatCalculatorBanner-2.jpg' /></SwiperSlide>
  </Swiper> 
  )
  
}

export default Carousel