import React from 'react'
import './skills.css'
import Technologies from './Tech'
import Libraries from './Libraries'
import {staggerContainer,fadeIn, slideIn}  from '../../utils/motion'
import { motion } from 'framer-motion'
import { TitleText } from '../CustomTexts'

const Skills = () => (
   <motion.section className="skills section" id="skills"
   variants={staggerContainer}
   initial = 'hidden'
   whileInView='show'
   viewport={{once: false, amount: 0.25}}>
    <TitleText title='Stack' />      

        <motion.div  className="skills__container container grid">
            <Technologies variants={fadeIn('up', 'tween', 0.4, 1)} />
            <Libraries variants={fadeIn('up', 'tween', 0.6, 1)}/>
        </motion.div>

   </motion.section>
  );

export default Skills