import React from 'react';
import './testimonials.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';


import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Testimonials = () =>  (
    <motion.section id='testimonials' className="testimonial container section"
      variants={staggerContainer}
      initial='hidden'
    whileInView="show"
    viewport={{once: false, amount: 0.25}}>
         <motion.h2 className="section__title" variants={fadeIn('up', 'tween', 0.2, 1)}>My clients say</motion.h2>
        <motion.span className="section__subtitle" variants={fadeIn('up', 'tween', 0.4, 1)}>Testimonials</motion.span>

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
            {Data.map(({id, image, title, description, position}) => {
                return (
                    <SwiperSlide className='testimonial__card' key={id}>
                        <img src={image} alt="" className='testimonial__img' />
                        <h3 className="testimonial__name">{title}</h3>
                        <span className='testimonial__title'>{position}</span>
                        <p className="testimonial__description">{description}</p>

                    </SwiperSlide>
                )
            })}
        </Swiper>
    </motion.section>
  );

export default Testimonials