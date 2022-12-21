import React from 'react'
import { motion } from 'framer-motion'


const Libraries = ({variants}) => (
    <motion.div variants={variants} className="skills__content">
      <h3 className="skills__title">Libraries</h3>

    
      <div className='skills__box'>
            <div className="skills__group">
            <div className="skills__data">
                 <i class='bx bxl-react'></i>

                 <div>
                    <h3 className="skills__name">React</h3>
                   
                 </div>
                </div>

                <div className="skills__data">
                 <i class='bx bxl-tailwind-css'></i>

                 <div>
                    <h3 className="skills__name">Tailwind</h3>
                   
                 </div>
                </div>

                <div className="skills__data">
                 <i class='bx bx-badge-check'></i>

                 <div>
                    <h3 className="skills__name">Material UI</h3>
                   
                 </div>
                </div>
                <div className="skills__data">
                 <i class='bx bx-badge-check'></i>

                 <div>
                    <h3 className="skills__name">Framer Motion</h3>
                   
                 </div>
                </div>

                <div className="skills__data">
                 <i class='bx bxl-bootstrap'></i>

                 <div>
                 <h3 className="skills__name">Bootstrap</h3>
                   
                 </div>
                </div>


                <div className="skills__data">
                 <i class='bx bx-badge-check'></i>

                 <div>
                    <h3 className="skills__name">NextJs</h3>
                   
                 </div>
                </div>

                {/* <div className="skills__data">
                 <i class='bx bx-badge-check'></i>

                 <div>
                    <h3 className="skills__name">Framer Motion</h3>
                    <span className='skills__level'>Intermediate</span>
                 </div>
                </div> */}

                

            </div>
      </div>


    </motion.div>
  );

export default Libraries