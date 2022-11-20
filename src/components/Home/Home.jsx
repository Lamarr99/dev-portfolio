import React from 'react'
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { motion } from 'framer-motion';


export const container = {
  show: {
    transition: {
      staggerChildren: 0.4
    },
  },
};

export const item = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, .01, -.05, .95],
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};


const Home = () => {
  return (
    <motion.section 
    className='home section' 
    id='home'
    variants={container}
    initial='hidden'
    animate='show'
    exit='exit'
    // onAnimationComplete={}

    >
        <div className="home__container container grid">
            <div className="home__content grid" >
                <Social />

                <motion.div className='home__img' variants={item}></motion.div>

                 <Data />
                
            </div>
            <ScrollDown variants={item}/>
        </div>
    </motion.section>

  )
}

export default Home