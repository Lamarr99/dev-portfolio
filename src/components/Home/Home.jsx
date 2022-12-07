import React from 'react'
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';


const Home = () => (
    <motion.section 
    className='home section' 
    id='home'
    variants={staggerContainer}
    initial='hidden'
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    >
        <div className="home__container container grid">
            <div className="home__content grid" >
                <Social />

                <motion.div className='home__img' variants={fadeIn('left','tween', 0.5, 1)}></motion.div>

                 <Data />
                
            </div>
            <ScrollDown variants={fadeIn('up', 'tween', 0.8, 1)}/>
        </div>
    </motion.section>

  );

export default Home