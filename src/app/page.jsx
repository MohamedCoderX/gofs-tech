
import About from '@/Components/About'
import Footer from '@/Components/Footer'

import Header from '@/Components/Header'
import Marque from '@/Components/Marque'
import Nav from '@/Components/Nav'
import {OurServices} from '@/Components/OurServices'
import Ourteams from '@/Components/Ourteams'
import Partner from '@/Components/Partner'
import Projects from '@/Components/Projects'
import TechnologiesSection from '@/Components/TechnologiesSection'
import Testimonials from '@/Components/Testimonials'
import WhyChooseUs from '@/Components/WhyChooseUs'
import Work from '@/Components/Work'
import React from 'react'

const page = () => {
  return (
    <div>
      <Nav/>
      <div className='header relative'>
      
      <Header/>
      </div>
      <Marque/>
      <About/>
      <OurServices/>
      <WhyChooseUs/>
      <TechnologiesSection/>
      <Partner/>
      <Ourteams/>
   
      <Work/>
      <Testimonials/>
    <Footer/>
    </div>
  )
}

export default page