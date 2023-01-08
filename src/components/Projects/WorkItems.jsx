import React from 'react'
import { motion } from 'framer-motion';
import { textVariant2 } from '../../utils/motion';

const WorkItems = ({item}) => (
    <motion.div 
      className="work__card" 
      key={item.id}
      variants={textVariant2}
      initial='hidden'
      whileInView='show'>
      <a href={item.url} target='_blank' rel='noreferrer'>
        <img src={item.image} alt="Tony Osijo Frontend project" className='work__img' loading='lazy' />
      </a>
      <h3 className="work__title">{item.title}</h3>
      <p className='work__detail'>{item.detail}</p>
     
      <div className='work__flex'> 
        <a href={item.code} className="work__button" target='_blank' >
         <i className="bx bxl-github work__button-icon"></i>
        </a>
        {item.builtWith}
      </div>

    </motion.div>
  );

export default WorkItems