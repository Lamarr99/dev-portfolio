import React,{useState} from 'react'
import './qualifications.css'

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1)

    const ToggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className='qualification section'>
        <h2 className="section__title">Where I've Worked</h2>
        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={toggleState === 1 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button button__flex'} onClick={()=> ToggleTab(1)}>Braingital</div>
                <div className={toggleState === 2 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button button__flex'} onClick={()=> ToggleTab(2)}>ASL</div>
                <div className={toggleState === 3 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button button__flex'} onClick={()=> ToggleTab(3)}>Flashpoint Studios</div>
            </div>

            <div className='qualification__sections'>
                <div className={toggleState == 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                    <div className='qualification__data'>
                        <h3 className='qualification__title'>Frontend Developer Intern @ <span>Braingital</span> </h3>
                        <small className='qualification__calender'>June 2022 - Present</small>
                        <div className='qualification__details'>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Develop and maintain code for in-house and client websites primarily using React.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Work and communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
                            {/* <p className='qualification__subtitle'>Worked with a team of three designers to build an open source platform for checkDp, a multipurpose app for designers.</p> */}
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Participate in pair programming with 3 engineers, and review team's code to provide additional perspective and catch previously missed errors.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> Manually test sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</p>

                        </div>
                    </div>
                </div>
                <div className={toggleState == 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                    <div className='qualification__data'>
                        <h3 className='qualification__title'>UI Engineer  @ <span>ASL</span> </h3>
                        <small className='qualification__calender'>January - March 2022 </small>
                        <div className='qualification__details'>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Rewrote HTML to meet industry and company's standards for SEO and Accessibility. This drove a 300% increase in users by appearing in the first page of Google search results.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Debugged code errors and software issues.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Utilized HTML,CSS and JavaScript to create landing pages for both company and clients.</p>

                        </div>
                    </div>
                </div>
                <div className={toggleState == 3 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                    <div className='qualification__data'>
                        <h3 className='qualification__title'>Graphic Designer @ <span>Flashpoint Studios</span> </h3>
                        <small className='qualification__calender'>November 2018 - September 2021</small>
                        <div className='qualification__details'>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Created graphics using design software including CorelDraw and Adobe Photoshop.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Advised clients on strategies to reach a particular audience and incorporated changes recommended by the clients into the final design.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Served as the contact for customer inquiries about graphic design, which in 6 cases increased customer spending by 40%.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>












        {/* <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? 'qualification__button qualification__active button__flex' 
                : 'qualification__button button__flex'} onClick={()=> ToggleTab(1)} >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience </div>
                
                <div className={toggleState === 2 ? 'qualification__button qualification__active button__flex' 
                : 'qualification__button button__flex'} onClick={()=> ToggleTab(2)} >
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
        </div> */}

    </section>
  )
}

export default Qualifications