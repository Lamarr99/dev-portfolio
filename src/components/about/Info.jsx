import React from 'react';
import { motion } from 'framer-motion';
import { scrollToLeft } from './About';
import { container } from '../Home/Home';

const Info = () => {
  return (
   <motion.div className="about__info grid" 
   variants={container}
   initial='hidden'
      animate='show'
      exit='exit'
      >
    <motion.div variants={scrollToLeft} whileHover={{translateY : -5}} className="about__box">
        <i className='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1+ Years</span>
    </motion.div>
    <motion.div variants={scrollToLeft} whileHover={{translateY : -5}} className="about__box">
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
    </motion.div>
    <motion.div variants={scrollToLeft} whileHover={{translateY : -5}} className="about__box">
        <i className='bx bx-support about__icon'></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
    </motion.div>
   </motion.div>
  )
}

export default Info