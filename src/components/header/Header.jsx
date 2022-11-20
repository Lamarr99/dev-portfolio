import React, {useState} from 'react'
import { links } from '../Home/Social'
import { motion } from 'framer-motion'

import './Header.css'

const linkItem = {
    hidden: {
      opacity: 0,
      x: 200
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [.6, .01, -.05, .95],
        duration: 3,
      },
    },
    exit: {
      opacity: 0,
      x: -200,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
      },
    },
  };

const Header = () => {
    //Change header bg
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        //when you scroll beyond 200vh, this adds .scroll-header to .header ; coming into view
        if (this.scrollY >= 80 ) header.classList.add('scroll-header');
        else {
            header.classList.remove('scroll-header'); 
        }; 
    })

    const  [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home')


  return (

    <header className="header">
        <nav className="nav container">
            <a href="index.html" className='nav__logo'>Tony</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <motion.ul className='nav__list grid' 
                variants={links}
                initial='hidden'
                animate='show'
                exit='exit'>
                    <motion.li className="nav__item"
                    variants={linkItem}>
                        <a className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link hvr-underline-from-left'} href="#home" 
                        onClick={() => setActiveNav('#home')} >
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </motion.li>
                    <motion.li className="nav__item"
                    variants={linkItem}>
                        <a className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'} href="#about" 
                        onClick={() => setActiveNav('#about')} >
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </motion.li>
                    <motion.li className="nav__item"
                    variants={linkItem}>
                        <a className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'} href="#skills" 
                        onClick={() => setActiveNav('#skills')}>
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </motion.li>
                    <motion.li className="nav__item"
                    variants={linkItem}>
                        <a className={activeNav === '#services' ? 'nav__link active-link' : 'nav__link'} href="#services" 
                        onClick={() => setActiveNav('#services')}>
                            <i className="uil uil-briefcase-alt nav__icon"></i>Services
                        </a>
                    </motion.li>
                    <motion.li className="nav__item"
                    variants={linkItem}>
                        <a className={activeNav === '#portfolio' ? 'nav__link active-link' : 'nav__link'} href="#portfolio" 
                        onClick={() => setActiveNav('#portfolio')}>
                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                        </a>
                    </motion.li>
                    <motion.li className="nav__item"
                    variants={linkItem}>
                        <a className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'} href="#contact" 
                        onClick={() => setActiveNav('#contact')}>
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
    </header>
  )
}

export default Header