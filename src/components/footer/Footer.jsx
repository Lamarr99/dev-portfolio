import React from 'react'
import './footer.css'

const Footer = () =>  (
    <footer id='footer' className="footer">
        <div className="footer__container container">

          {/* <div className="footer__social">
            <a href="https://github.com/Lamarr99" className="footer__social-link" target='_blank' rel='noreferrer' ><i class="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/tony-osijo/" className="footer__social-link" target='_blank' rel='noreferrer' ><i class="bx bxl-linkedin"></i></a>
            <a href="" className="footer__social-link" target='_blank' rel='noreferrer' ><i class="bx bxl-whatsapp"></i></a>    
          </div> */}
            <a href='https://github.com/Lamarr99' target='_blank' className="footer__copy">Designed & Built by Tony Osijo.</a>
        </div>
    </footer>
  );

export default Footer