import React from 'react'
import { motion } from 'framer-motion'


const Technologies = ({variants}) =>  (
    <motion.div variants={variants} className="skills__content">
        <h3 className="skills__title">Technologies</h3>

        <div className="skills__box">

            <div className="skills__group">
                

                <div className="skills__data">
                <i class='bx bxl-javascript' ></i>

                 <div>
                    <h3 className="skills__name">JavaScript (ES6+)</h3>
                 </div>
                </div>

                <div className="skills__data">
                 <i class='bx bxl-css3'></i>

                 <div>
                    <h3 className="skills__name">CSS</h3>
                 </div>
                </div>
                <div className="skills__data">
                 <i class='bx bxl-css3'></i>

                 <div>
                    <h3 className="skills__name">Typescript</h3>
                 </div>
                </div>

                <div className="skills__data">
                 <i class='bx bxl-git'></i>

                 <div>
                    <h3 className="skills__name">Git</h3>
                 </div>
                </div>


                <div className="skills__data">
                 <i class='bx bxl-figma'></i>

                 
                 <div>
                 <h3 className="skills__name">Figma</h3>
                    
                 </div>
                </div>

                <div className="skills__data">
                 <i class='bx bxl-adobe'></i>

                 <div>
                    <h3 className="skills__name">Photoshop</h3>
                 </div>
                </div>
                


            </div>
        </div>
       
    </motion.div>
  );

export default Technologies