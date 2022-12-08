import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../../utils/motion'

const Social = () =>  (
  <motion.div className="home__social" 
  variants={staggerContainer}
  initial='hidden'
  whileInView="show"
  viewport={{once: true, amount: 0.25}}
 >
    <motion.a variants={fadeIn('down', 'spring', 0.6, 1)} href="https://github.com/Lamarr99" className="home__social-icon" target='_blank' rel='noreferrer' ><i className="uil uil-github"></i></motion.a>
    <motion.a variants={fadeIn('down', 'spring', 0.4, 1)} href="https://www.linkedin.com/in/tony-osijo/" className="home__social-icon" target='_blank' rel='noreferrer' ><i className="uil uil-linkedin"></i></motion.a>
    <motion.a variants={fadeIn('down', 'spring', 0.2, 1)} href="https://wa.me/message/NLFY2LONBZEVJ1" className="home__social-icon" target='_blank' rel='noreferrer' ><i className="uil uil-whatsapp"></i></motion.a>
    
    </motion.div>
  );

export default Social;