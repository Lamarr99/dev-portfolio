import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';

const ProjectItems = ({item}) => (
    <motion.div 
      
      variants={staggerContainer}
      initial = 'hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}>
        <motion.div 
        variants={fadeIn('up', 'tween', 0.2, 1)} 
        className="work__card" 
        key={item.id}>
      <a href={item.url} target='_blank' rel='noreferrer'>
        <img src={item.image} alt="Tony Osijo Frontend project" className='work__img' loading='lazy' />
      </a>
      <h3 className="work__title">{item.title}</h3>
      <p className='work__detail'>{item.detail}</p>
     
      <div className='work__flex'> 
        <a 
          href={item.code} 
          className="work__button" 
          target='_blank' >
         <i className="bx bxl-github work__button-icon"></i>
        </a>
        {item.builtWith}
      </div>
      </motion.div>

    </motion.div>
  );

export default ProjectItems