import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/luis-palacios-gutierrez/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Luispaguti" target="_blank"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials