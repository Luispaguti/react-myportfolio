import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build and deploy a fully responsive website with modern UI/UX in React JS with Tailwind. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Create a real estate rental website!.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create a website for your online store!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create a booking website, either for your hotel, gym, paddle tennis court...</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>And many more! Without using templates and everything completely customizable.</p>
            </li>
          </ul>
        </article>
        {/*END*/}
        <article className='service'>
          <div className="service__head">
            <h3>Web Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full-stack application by using;-backend; NodeJS, ExpressJS and MongoDB.-front-end; ReactJS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>A game using technologies like Javascript ES6, HTML5, and CSS3 and Canvas.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Connect your website to an api.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Connect your website to a database.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Help to develop that web application you've always wanted!</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Lawyer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I know the environment or legal ecosystem from the inside.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can help you understand the charges and sanctions you face, especially in terms of data protection.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conocimiento actualizado de ley.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I will be able to understand the nature of your problems, what they might boil down to, and any gaps that might be overlooked.</p>
            </li>
          </ul>
        </article>
      </div>


    </section>
  )
}

export default Services