import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'





function Contact() {


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
          <MdOutlineMail className='contact__option-icon'/> 
            <h4>Email</h4>
            <h5>l.palaciosgutiérrez@gmail.com</h5>
            <a href="mailto:l.palaciosgutiérrez@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
          <BsInstagram className='contact__option-icon'/> 
            <h4>Instagram</h4>
            <h5>@luispagu</h5>
            <a href="https://www.instagram.com/luispagu/" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/> 
            <h4>WhatsApp</h4>
            <h5>+34 627 66 32 12</h5>
            <a href="https://api.whatsapp.com/send?phone=+34627663212/" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
          <form >
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='nemailame' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
            <button type='submit'className='btn btn-primary'>Send Message</button>
          </form>
        
      </div>
    </section>
  )
}

export default Contact

