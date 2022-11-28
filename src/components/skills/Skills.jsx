import React,{useEffect} from 'react'
import './skills.css'
import Technologies from './Tech'
import Libraries from './Libraries'
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { container } from '../Home/Home';
import { loadOnScroll, scrollToLeft } from '../about/About';

const Skills = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('show');
      }
  }, [controls, inView]);

  return (
   <motion.section className="skills section" id="skills"
      ref={ref}
      variants={container}
      initial='hidden'
      animate={controls}
      exit='exit'>
     <motion.h2 variants={loadOnScroll} className='section__title'>Skills</motion.h2>
      

        <motion.div variants={scrollToLeft} className="skills__container container grid">
            <Technologies />
            <Libraries />
        </motion.div>

   </motion.section>
  )
}

export default Skills