import React from 'react'
import { motion } from 'framer-motion'

export const links = {
  show: {
    transition: {
      staggerChildren: 0.4
    },
  },
};

export const scrollToRight = {
  hidden: {
    opacity: 0,
    x: -200
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [.6, .01, -.05, .95],
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};



const Social = () => {
  return (
  <motion.div className="home__social" variants={links}
    initial='hidden'
    animate='show'
    exit='exit'
 >
    <motion.a  variants={scrollToRight} href="https://github.com/Lamarr99" className="home__social-icon" target='_blank' rel='noreferrer' ><i className="uil uil-github"></i></motion.a>
    <motion.a variants={scrollToRight} href="https://www.linkedin.com/in/tony-osijo/" className="home__social-icon" target='_blank' rel='noreferrer' ><i className="uil uil-linkedin"></i></motion.a>
    <motion.a variants={scrollToRight} href="https://wa.me/message/NLFY2LONBZEVJ1" className="home__social-icon" target='_blank' rel='noreferrer' ><i className="uil uil-whatsapp"></i></motion.a>
    
    </motion.div>
  )
}

export default Social