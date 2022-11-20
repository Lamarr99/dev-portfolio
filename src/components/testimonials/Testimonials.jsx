import React from 'react';
import './testimonials.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';


import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <motion.section id='testimonials' className="testimonial container section">
         <h2 className="section__title">My clients say</h2>
        <span className="section__subtitle">Testimonials</span>

        <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          
        }}
        modules={[Pagination]}
        className="mySwiper testimonial__container">
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className='testimonial__card' key={id}>
                        <img src={image} alt="" className='testimonial__img' />
                        <h3 className="testimonial__name"> {title} </h3>
                        <p className="testimonial__description">{description}</p>

                    </SwiperSlide>
                )
            })}
        </Swiper>
    </motion.section>
  )
}

export default Testimonials