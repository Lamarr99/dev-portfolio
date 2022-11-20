import React from 'react';
import './work.css'
import Works from './Works';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <motion.section className="work section" id='portfolio'
    initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: window.innerWidth, transition: { duration: 0.3 }}}>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">
        Recent Works
        </span>

        <Works />

    </motion.section>
  )
}

export default Work