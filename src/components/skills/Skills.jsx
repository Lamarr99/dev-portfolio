import React from 'react'
import './skills.css'
import Technologies from './Tech'
import Libraries from './Libraries'
import {staggerContainer,fadeIn, slideIn}  from '../../utils/motion'
import { motion } from 'framer-motion'

const Skills = () => (
   <motion.section className="skills section" id="skills"
   variants={staggerContainer}
   initial = 'hidden'
   whileInView='show'
   viewport={{once: false, amount: 0.25}}>
     <motion.h2 variants={slideIn('up', 'spring', 0.2, 1)} className='section__title'>Skills</motion.h2>
      

        <motion.div  className="skills__container container grid">
            <Technologies variants={fadeIn('right', 'tween', 0.2, 1)} />
            <Libraries variants={fadeIn('left', 'tween', 0.2, 1)}/>
        </motion.div>

   </motion.section>
  );

export default Skills