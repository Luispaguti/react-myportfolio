import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import './header.css'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/luis-palacios-gutierrez/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Luispaguti" target="_blank"><AiFillGithub/></a>
      <a href="https://www.instagram.com/luispagu/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials