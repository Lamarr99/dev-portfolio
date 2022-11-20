import React from 'react'
import './skills.css'
import Technologies from './Tech'
import Libraries from './Libraries'
import { motion} from 'framer-motion'

const Skills = () => {
  return (
   <motion.section className="skills section" id="skills"
  //  initial={{width: 0}}
      // animate={{y: 100}}
      // exit={{x: window.innerWidth, transition: { duration: 0.3 }}}
      >
     <h2 className='section__title'>Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Technologies />
            <Libraries />
        </div>

   </motion.section>
  )
}

export default Skills