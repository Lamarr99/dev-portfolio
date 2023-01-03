import React,{ useState } from 'react'
import './experience.css'
import { motion } from 'framer-motion';
import {staggerContainer, fadeIn}  from '../../utils/motion'
import { TitleText } from '../CustomTexts';


const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1)

    const ToggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <motion.section 
    className='experience section' 
    id='experience'
    variants={staggerContainer}
    initial = 'hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}>
    <TitleText title="Professional Experience" />
        <div className='experience__container container'>
            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className='experience__tabs'>
                <div className={toggleState === 1 ? 'experience__button experience__active button__flex' :
                 'experience__button button__flex'} onClick={()=> ToggleTab(1)}>Braingital</div>
                <div className={toggleState === 2 ? 'experience__button experience__active button__flex' :
                 'experience__button button__flex'} onClick={()=> ToggleTab(2)}>ASL</div>
                <div className={toggleState === 3 ? 'experience__button experience__active button__flex' :
                 'experience__button button__flex'} onClick={()=> ToggleTab(3)}>Flashpoint Studios</div>
            </motion.div>

                <motion.div variants={fadeIn('up', 'spring', 0.4, 1)} className={toggleState == 1 ? 'experience__content experience__content-active' : 'experience__content'}>            
                        <h3 className='experience__title'>Frontend Developer Intern @ <span className='company'>Braingital</span> </h3>
                        <small className='experience__timeline'>June 2022 - Present</small>
                        <motion.div variants={fadeIn('up', 'spring', 0.6, 1)} className='experience__details'>
                            <i className='bx bxs-right-arrow experience__icon'></i><p className='experience__subtitle'>Develop and maintain code for in-house and client websites primarily using React.</p>
                            <i className='bx bxs-right-arrow experience__icon'></i><p className='experience__subtitle'>Work and communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
                            <i className='bx bxs-right-arrow experience__icon'></i><p className='experience__subtitle'>Participate in pair programming with 3 engineers, and review team's code to provide additional perspective and catch previously missed errors.</p>
                            <i className='bx bxs-right-arrow experience__icon'></i><p className='experience__subtitle'> Manually test sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</p>
                        </motion.div>
                </motion.div>
                <div className={toggleState == 2 ? 'experience__content experience__content-active' : 'experience__content'}>
                   
                        <h3 className='experience__title'>UI Engineer  @ <span className='company'>ASL</span> </h3>
                        <small className='experience__timeline'>January - March 2022 </small>
                        <div className='experience__details'>
                            <i className='bx bxs-right-arrow experience__icon'></i><p className='experience__subtitle'>Utilized HTML & CSS to create landing pages for both company and clients.</p>
                            <i className='bx bxs-right-arrow experience__icon'></i><p className='experience__subtitle'>Debugged code errors and software issues.</p>
                            <i className='bx bxs-right-arrow experience__icon'></i><p className='experience__subtitle'>Rewrote HTML to meet industry and company's standards for SEO and Accessibility. This drove a 300% increase in users by appearing in the first page of Google search results.</p>
                    </div>
                </div>
                <div className={toggleState == 3 ? 'experience__content experience__content-active' : 'experience__content'}>
                    
                        <h3 className='experience__title'>Graphic Designer @ <span className='company'>Flashpoint Studios</span> </h3>
                        <small className='experience__timeline'>November 2018 - September 2021</small>
                        <div className='experience__details'>
                            <i className='bx bxs-right-arrow experience__icon'></i><p className='experience__subtitle'>Created graphics using design software including CorelDraw and Adobe Photoshop.</p>
                            <i className='bx bxs-right-arrow experience__icon'></i><p className='experience__subtitle'>Advised clients on strategies to reach a particular audience and incorporated changes recommended by the clients into the final design.</p>
                            <i className='bx bxs-right-arrow experience__icon'></i><p className='experience__subtitle'>Served as the contact for customer inquiries about graphic design, which in 20+ cases increased customer spending.</p>

                    </div>
                </div>
            
        </div>
        <br />

    </motion.section>
  )
}

export default Qualifications