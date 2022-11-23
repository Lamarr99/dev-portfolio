import React from 'react';
import './work.css'
import Works from './Works';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <motion.section className="work section" id='portfolio'>
        <h2 className="section__title"> Some things I've Built</h2>
        
        <Works />

    </motion.section>
  )
}

export default Work