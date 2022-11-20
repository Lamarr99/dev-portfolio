import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            {/* <h1 className="footer__title">Tony</h1> */}

            {/* <ul className="footer__list">
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                <li>
                    <a href="#portfolio" className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className='footer__link'>Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://github.com/Lamarr99" className="footer__social-link" target='_blank' rel='noreferrer' ><i class="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/tony-osijo/" className="footer__social-link" target='_blank' rel='noreferrer' ><i class="bx bxl-linkedin"></i></a>
            <a href="" className="footer__social-link" target='_blank' rel='noreferrer' ><i class="bx bxl-whatsapp"></i></a>
    
            </div> */}
            <a href='http://github.com/Lamarr99' className="footer__copy">Designed & Built by Tony Osijo.</a>
        </div>
    </footer>
  )
}

export default Footer