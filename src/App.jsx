import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
        <Header/>
        <Nav></Nav>
        <About/>
        <Experience/>
        <Portfolio></Portfolio>  
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
    </>
  )
}

export default App