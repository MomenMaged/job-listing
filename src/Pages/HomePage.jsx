import React from 'react'
import Hero from '../components/Hero'
import Homecard from '../components/Homecard'
import JobListings from '../components/JobListings' 
import Viewalljobs from '../components/Viewalljobs'

const HomePage = () => {
  return (
    <>     
    <Hero/>
    <Homecard/>
    <JobListings isHome={true}/>
    <Viewalljobs/>
    </>
  )
}

export default HomePage