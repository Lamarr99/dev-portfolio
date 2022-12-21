import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../../utils/motion'


import './Header.css'

const Header = () => {
    //Change header bg
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        //when you scroll beyond 200vh, this adds .scroll-header to .header ; coming into view
        if (this.scrollY >= 80 ) header.classList.add('scroll-header');
        else {
            header.classList.remove('scroll-header'); 
        }; 
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home')


  return (

    <motion.header 
        className="header"
        variants={staggerContainer}
        initial='hidden'
        whileInView="show"
        viewport={{once: false, amount: 0.25}}>
        <nav className="nav container">
            <motion.a href="#home" className='nav__logo'
                variants={fadeIn('down', 'tween', 0.2, 1)}>
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                width="30px" height="30px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                    <path  fill={`var(--title-color)`} d="M59.167,10c-6.896,0-12.5,5.612-12.5,12.5V65h-5.834c-6.895,0.003-12.5,5.611-12.5,12.5
	                c0,6.893,5.605,12.5,12.497,12.5c6.895,0,12.503-5.607,12.503-12.5V35h5.834c6.892,0,12.5-5.605,12.5-12.5S66.059,10,59.167,10z
	                M46.667,77.5c0,3.216-2.617,5.833-5.837,5.833c-3.216,0-5.83-2.617-5.83-5.833c0-3.213,2.617-5.83,5.833-5.833h5.834V77.5z
	                M59.167,28.333h-5.834V22.5c0-3.216,2.617-5.833,5.834-5.833c3.216,0,5.833,2.617,5.833,5.833S62.383,28.333,59.167,28.333z"/>
                    <path className='tony__svg' fill={`var(--hover-color)`} d="M46.667,28.333H22.5c-6.895,0-12.5,5.604-12.5,12.5c0,6.896,5.605,12.5,12.5,12.5h24.167v-6.666H22.5
	                c-3.216,0-5.833-2.617-5.833-5.834c0-3.216,2.617-5.833,5.833-5.833h24.167V28.333z"/>
                    <path className='tony__svg' fill={`var(--hover-color)`} d="M53.333,65H77.5c3.216,0,5.833-2.617,5.833-5.833c0-3.217-2.617-5.834-5.833-5.834H53.333v-6.666H77.5
	                c6.893,0,12.5,5.604,12.5,12.5c0,6.892-5.607,12.5-12.5,12.5H53.333V65z"/>
                </svg>
            </motion.a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <motion.ul className='nav__list grid' >
                    <motion.li 
                        className="nav__item"
                        variants={fadeIn('down', 'tween', 0.2, 1)}
                     >
                        <a className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link hvr-underline-from-left'} href="#home" 
                        onClick={() => setActiveNav('#home')} >
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </motion.li>
                    <motion.li className="nav__item"
                        variants={fadeIn('down', 'tween', 0.3, 1)}>
                        <a className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'} href="#about" 
                        onClick={() => setActiveNav('#about')} >
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </motion.li>
                    <motion.li className="nav__item"
                        variants={fadeIn('down', 'tween', 0.4, 1)}>
                        <a className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'} href="#skills" 
                        onClick={() => setActiveNav('#skills')}>
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </motion.li>
                    <motion.li className="nav__item"
                        variants={fadeIn('down', 'tween', 0.5, 1)}>
                        <a className={activeNav === '#experience' ? 'nav__link active-link' : 'nav__link'} href="#experience" 
                        onClick={() => setActiveNav('#experience')}>
                            <i className="uil uil-file nav__icon"></i>Experience
                        </a>
                    </motion.li>
                    
                    <motion.li className="nav__item"
                        variants={fadeIn('down', 'tween', 0.5, 1)}>
                        <a className={activeNav === '#portfolio' ? 'nav__link active-link' : 'nav__link'} href="#portfolio" 
                        onClick={() => setActiveNav('#portfolio')}>
                            <i className="uil uil-briefcase-alt nav__icon"></i>Projects
                        </a>
                    </motion.li>
                    <motion.li className="nav__item"
                        variants={fadeIn('down', 'tween', 0.6, 1)}>
                        <a className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'} href="#contact" 
                        onClick={() => setActiveNav('#contact') && showMenu(!Toggle)}>
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </motion.li>

                </motion.ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className='nav__toggle' 
                 onClick={() => showMenu(!Toggle)}>
                 <i className="uil uil-apps"></i>
            </div>
        </nav>
    </motion.header>
  )
}

export default Header