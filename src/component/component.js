import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper/swiper-bundle.min';

const SwiperComponent = ({ slides }) => {
  useEffect(() => {
    // Inicializar Swiper
    new Swiper(".product-row", {
        spaceBetween: 30,
        loop:true,
        centeredSlides:true,
        autoplay:{
            delay:9500,
            disableOnInteraction:false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
    });
   
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div key={index} className="swiper-slide">
            {/* Contenido de la diapositiva (slide) */}
            {slide}
          </div>
        ))}
      </div>
    </div>
  );

}
export default SwiperComponent;

