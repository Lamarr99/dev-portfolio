import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <a href={item.url} target='_blank'><img src={item.image} alt="" className='work__img' /></a>
      <h3 className="work__title">{item.title}</h3>
      <p className='work__detail'>{item.detail}</p>
     
      <div className='work__flex'> <a href={item.code} className="work__button" target='_blank' >
        <i className="bx bxl-github work__button-icon"></i>
      </a>{item.builtWith}</div>

      <div class="shine"></div>
    <div class="background">
      <div class="tiles">
        <div class="tile tile-1"></div>
        <div class="tile tile-2"></div>
        <div class="tile tile-3"></div>
        <div class="tile tile-4"></div>

        <div class="tile tile-5"></div>
        <div class="tile tile-6"></div>
        <div class="tile tile-7"></div>
        <div class="tile tile-8"></div>

        <div class="tile tile-9"></div>
        <div class="tile tile-10"></div>
      </div>

      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>

    </div>
  )
}

export default WorkItems