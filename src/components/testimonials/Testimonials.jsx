import React from 'react'
import './testimonials.css'
import Alex from '../../assets/alex.jpg'
import Bor from '../../assets/bor.png'
import Andrea from '../../assets/Andrea.png'
import Iago from '../../assets/Iago.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
{
  avatar:Alex,
  position:"Founder of Blackside gym",
  name:'Alejandro Práxedes',
  review: "I asked him to do the web for me and I couldn't be happier. He perfectly understood what I was looking for and knew how to capture our style on the web. Great professional, trustworthy person and I recommend him.",
},
{
  avatar:Bor,
  name:'Borja Muñoz',
  position:"Founder of Solarchain",
  review: 'Luis very carefully recognized our needs and understood the way our company and customer service working.It’s been a pleasure to work with him, and we look forward to continuing this partnership further',
},
{
  avatar:Andrea,
  position:"Front-End web developer at i3te Digitalización Industrial",
  name:'Andrea López González',
  review: 'I loved working with Luis! Together we made an application called Another-life. Thanks to his knowledge and creativity, together we were able to do something very interesting.',
},
{
  avatar:Iago,
  name:'Iago Sanmartin Mantiñan',
  position:"CEO at Monkey Markets",
  review: 'Luis has a very complete profile, thanks to his knowledge in programming, design and law, he can solve many problems that may arise.',
},
]


function Testimonials() {
  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className='container testimonials__container'
     modules={[ Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     >
     
    {
      data.map(({avatar, name,position, review},index) =>{
        return(
          <SwiperSlide key={index} className='testimonials'>
          <div className='client__avatar'>
            <img src={avatar}  />
          </div>
          <h5 className='client__name'>{name}</h5>
          <h6 className='client__position'>{position}</h6>
          <small className='client__review'>
            {review}
          </small>
        </SwiperSlide>
  
        )
      })
    }

    </Swiper>
    </section>
  )
}

export default Testimonials