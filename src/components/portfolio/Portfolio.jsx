import React from 'react'
import '../portfolio/portfolio.css'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio_item-image"></div>

          <img src={IMG1} alt=""/>
          <h3>Responsive Website with Modern UI/UX in React JS + Vite and Tailwind</h3>
          <a href='https://github.com/Luispaguti/Blackside' className='btn'>Github</a>
          <a href='https://blackside.es/' className='btn btn-primary' target='_blank'>Try it!</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image"></div>

          <img src={IMG1} alt=""/>
          <h3>This is a portfolio item title</h3>
          <a href='https://github.com/Luispaguti' className='btn'>Github</a>
          <a href='https://proyect-production.up.railway.app/login' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image"></div>

          <img src={IMG1} alt=""/>
          <h3>This is a portfolio item title</h3>
          <a href='https://github.com/Luispaguti' className='btn'>Github</a>
          <a href='https://proyect-production.up.railway.app/login' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>

    </section>
  )
}

export default Portfolio