import React from 'react'
import '../portfolio/portfolio.css'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'
import IMG4 from '../../assets/IMG4.png'
import IMG5 from '../../assets/IMG5.png'
import IMG6 from '../../assets/IMG6.png'

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

          <img src={IMG2} alt=""/>
          <h3>Responsive Website with Modern UI/UX in React JS + Vite and Tailwind</h3>
          <a href='https://github.com/Luispaguti/Innovation' className='btn'>Github</a>
          <a href='https://thenextgeneration.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image"></div>

          <img src={IMG6} alt=""/>
          <h3>React Portfolio Website</h3>
          <a href='https://github.com/Luispaguti/react-myportfolio' className='btn'>Github</a>
          <a href='https://react-portfolio-lpg.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image"></div>

          <img src={IMG4} alt=""/>
          <h3>It is an intagram for Crossfit athletes, where you can post both your stories and your workouts</h3>
          <a href='https://github.com/Luispaguti/Crossfitgram-ironhack' className='btn'>Github</a>
          <a href='https://www.loom.com/share/c00ea33a31b54bf18d26e1f40c856ea2' className='btn btn-primary' target='_blank'>Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image"></div>

          <img src={IMG5} alt=""/>
          <h3>It is an a Second-hand buying and selling application, where you can post your products and find those in which you are interested.</h3>
          <a href='https://www.loom.com/share/ebe2adea283443ff83f60d2d72c3daf0' className='btn'>Github</a>
          <a href='https://github.com/palacios-gonzalez/another-life' className='btn btn-primary' target='_blank'>Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image"></div>

          <img src={IMG3} alt=""/>
          <h3>Galaxy-Game, The game is platform-style, starring an astronaut who coincidentally has the same face as me</h3>
          <a href='https://github.com/Luispaguti/GALAXY-GAME' className='btn'>Github</a>
          <a href='https://luispaguti.github.io/GALAXY-GAME/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>

    </section>
  )
}

export default Portfolio