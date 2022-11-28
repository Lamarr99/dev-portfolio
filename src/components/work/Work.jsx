import React,{useEffect} from 'react';
import './work.css'
import Works from './Works';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { container } from '../Home/Home';
import { loadOnScroll, scrollToLeft } from '../about/About';


const Work = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('show');
      }
  }, [controls, inView]);

  return (
    <motion.section 
      className="work section" 
      id='portfolio'
      ref={ref}
      variants={container}
      initial='hidden'
      animate={controls}
      exit='exit'>
        <motion.h2 className="section__title"
          variants={loadOnScroll}> Some things I've Built</motion.h2>
        
        <Works variants={loadOnScroll} />

    </motion.section>
  )
}

export default Work