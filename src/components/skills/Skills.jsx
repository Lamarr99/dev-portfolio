import React from 'react'
import './skills.css'
import Technologies from './Tech'
import Libraries from './Libraries'
import { motion} from 'framer-motion'

const Skills = () => {
  return (
   <motion.section className="skills section" id="skills">
     <h2 className='section__title'>Skills</h2>
      

        <div className="skills__container container grid">
            <Technologies />
            <Libraries />
        </div>

   </motion.section>
  )
}

export default Skills