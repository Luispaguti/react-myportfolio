import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { RiFolderOpenLine } from 'react-icons/ri'

function About() {
  return (
    <section id='about'>About
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>


        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <RiFolderOpenLine className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestiae quaerat rem, aliquid, accusantium non neque ipsum vel officia quos excepturi reiciendis deleniti hic, dolore ullam quibusdam ab magni. Iure.
          </p>

          <a href="#contact" className='btn btn-primary'>Let´s Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About