'use client';

import { motion } from "framer-motion";
import {textContainer, textVariant2 }  from '../utils/motion'

export const TypingText = ({title}) => (
  <motion.p
    variants={textContainer}
    className='section__subtitle'
  >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
            {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
  </motion.p>
);

export const TitleText = ({title}) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className='section__title'
    >
    {title}
    </motion.h2>
);
