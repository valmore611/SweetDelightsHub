import React from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

const MyComponent = () => {
  return (
    <>
      <Swiper className="product-row" spaceBetween={30} loop={true} centeredSlides={true} autoplay={{delay: 9500, disableOnInteraction: false}} pagination={{el: ".swiper-pagination", clickable: true}} breakpoints={{0: {slidesPerView: 1}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 3}}}></Swiper>
      <Swiper className="blogs-row" spaceBetween={30} loop={true} centeredSlides={true} autoplay={{delay: 9500, disableOnInteraction: false}} pagination={{el: ".swiper-pagination", clickable: true}} navigation={{nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}} breakpoints={{0: {slidesPerView: 1}, 768: {slidesPerView: 1}, 1024: {slidesPerView: 1}}}></Swiper>
      <Swiper className="review-row" spaceBetween={30} loop={true} centeredSlides={true} autoplay={{delay: 9500, disableOnInteraction: false}} pagination={{el: ".swiper-pagination", clickable: true}} breakpoints={{0: {slidesPerView: 1}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 3}}}></Swiper>
    </>
  );
};

export default MyComponent;