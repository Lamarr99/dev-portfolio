import React from 'react';
import './projects.css'
import Works from './Works';
import { motion } from 'framer-motion';
import {staggerContainer,fadeIn}  from '../../utils/motion'
import { TitleText } from '../CustomTexts';

const Work = () => (
    <motion.section 
      className="work section" 
      id='portfolio'
      variants={staggerContainer}
      initial = 'hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}>
        <TitleText title="Projects" />
        
        <Works variants={fadeIn('up','tween', 0.2, 1)} />

    </motion.section>
  );

export default Work