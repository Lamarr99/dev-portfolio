import React from 'react';
import './work.css'
import Works from './Works';
import { motion } from 'framer-motion';
import {staggerContainer,fadeIn}  from '../../utils/motion'

const Work = () => (
    <motion.section 
      className="work section" 
      id='portfolio'
      variants={staggerContainer}
    initial = 'hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}>
        <motion.h2 className="section__title"
          variants={fadeIn('up','spring', 0.2, 1)}>Projects</motion.h2>
        
        <Works variants={fadeIn('up','tween', 0.6, 1)} />

    </motion.section>
  );

export default Work