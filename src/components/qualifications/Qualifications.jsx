import React,{useState} from 'react'
import './qualifications.css'

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1)

    const ToggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className='qualification section'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? 'qualification__button qualification__active button__flex' 
                : 'qualification__button button__flex'}
                onClick={()=> ToggleTab(1)} >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
                
                <div className={toggleState === 2 ? 'qualification__button qualification__active button__flex' 
                : 'qualification__button button__flex'}
                onClick={()=> ToggleTab(2)} >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
        </div>

        <div className="qualification__sections">
            <div className={toggleState === 1 
                ? 'qualification__content qualification__content-active' 
                : 'qualification__content'} >
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Frontend Developer Intern</h3>
                        <span className="qualification__subtitle">Braingital</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>Feb. 2022 - Present
                        </div>
                    </div>

                <div >
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div >
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">UI Engineer</h3>
                        <span className="qualification__subtitle">Braingital</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>Jan. 2020 - May. 2021
                        </div>
                    </div>
                </div>


                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Graphics Designer</h3>
                        <span className="qualification__subtitle">Flashpoint</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>Nov. 2017 - Jan. 2020
                        </div>
                    </div>

                <div >
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                
                </div>

                

            </div>

           

            <div className={toggleState === 2 
                ? 'qualification__content qualification__content-active' 
                : 'qualification__content'}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Federal Polytechnic Ilaro, Ogun state</h3>
                        <span className="qualification__subtitle">National Diploma</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2015 - 2017
                        </div>
                    </div>

                <div >
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div >
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Lofi Ogunmude Snr College</h3>
                        <span className="qualification__subtitle">Secondary</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2014
                        </div>
                    </div>
                </div>


                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Ijebu-Ode Grammar School</h3>
                        <span className="qualification__subtitle">Secondary</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2006 - 2011
                        </div>
                    </div>

                <div >
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                
                </div>

                

            </div>

            

            
        </div>
        </div>

    </section>
  )
}

export default Qualifications