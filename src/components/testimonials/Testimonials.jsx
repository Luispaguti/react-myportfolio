import React from 'react'
import './testimonials.css'
import Alex from '../../assets/alex.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
{
  avatar:Alex,
  name:'Alejandro Práxedes',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam repudiandae vitae a voluptatum aperiam, perspiciatis, unde quia in ratione eligendi praesentium fuga, hic minima iusto? Optio iste ipsum nobis debitis',
},
{
  avatar:Alex,
  name:'Alejandro Práxedes',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam repudiandae vitae a voluptatum aperiam, perspiciatis, unde quia in ratione eligendi praesentium fuga, hic minima iusto? Optio iste ipsum nobis debitis',
},
{
  avatar:Alex,
  name:'Alejandro Práxedes',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam repudiandae vitae a voluptatum aperiam, perspiciatis, unde quia in ratione eligendi praesentium fuga, hic minima iusto? Optio iste ipsum nobis debitis',
},
{
  avatar:Alex,
  name:'Alejandro Práxedes',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam repudiandae vitae a voluptatum aperiam, perspiciatis, unde quia in ratione eligendi praesentium fuga, hic minima iusto? Optio iste ipsum nobis debitis',
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
      data.map(({avatar, name, review},index) =>{
        return(
          <SwiperSlide key={index} className='testimonials'>
          <div className='client__avatar'>
            <img src={avatar}  />
          </div>
          <h5 className='client__name'>{name}</h5>
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