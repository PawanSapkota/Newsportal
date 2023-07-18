'use client'
import Toolbar from '@/components/navigation/Toolbar'
import Banner from '@/components/pagecomponent/banner/Banner'
import Breaking from '@/components/pagecomponent/breakingnews/Breakingnews'
import Footer from '@/components/pagecomponent/footer/Footer'
import Section from '@/components/pagecomponent/section/Section'
import React from 'react'


const Home = () => {
  return (
    <div>
      <Toolbar/>
      <div className='bg-bgsecondary'>
        <Banner/>
        <Breaking/>
        <Section/>
        <Footer/>
      </div>

</div>
    
  )
}

export default Home
