import React from 'react';
import './testimonials.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { TypingText, TitleText } from '../CustomTexts';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Testimonials = () =>  (
    <motion.section 
      id='testimonials' 
      className="testimonial container section"
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport={{once: false, amount: 0.25}}>
      <TitleText title="My clients say" />
      <TypingText title="Testimonials" />

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
            {Data.map(({id, image, title, description, position}) => (
                    <SwiperSlide key={id}>
                      <motion.div className='testimonial__card'
                         variants={fadeIn('up', 'tween', 0.2, 1)}
                      >
                        <img src={image} alt="" className='testimonial__img' />
                        <h3 className="testimonial__name">{title}</h3>
                        <span className='testimonial__title'>{position}</span>
                        <p className="testimonial__description">{description}</p>
                      </motion.div>
                    </SwiperSlide>
                )
            )}
        </Swiper>
    </motion.section>
  );

export default Testimonials