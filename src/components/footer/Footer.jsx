import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FiTwitch} from 'react-icons/fi'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>LUIS</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.instagram.com/luispagu/"><BsInstagram/></a>
        <a href="https://twitter.com/Luispaguti"><BsTwitter/></a>
        <a href="https://www.twitch.tv/luispaguti"><FiTwitch/></a>
      </div>


      <div className='footer__copyright'>
        <small>Luis Palacios Gutiérrez.All rights reserved.</small>

      </div>
    </footer>
  )
}

export default Footer