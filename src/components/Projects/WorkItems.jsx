import React from 'react'

const WorkItems = ({item}) => (
    <div className="work__card" key={item.id}>
      <a href={item.url} target='_blank' rel='noreferrer'><img src={item.image} alt="Anthony Osijo-project" className='work__img' loading='lazy' /></a>
      <h3 className="work__title">{item.title}</h3>
      <p className='work__detail'>{item.detail}</p>
     
      <div className='work__flex'> 
        <a href={item.code} className="work__button" target='_blank' >
         <i className="bx bxl-github work__button-icon"></i>
        </a>
        {item.builtWith}
      </div>


    </div>
  );

export default WorkItems