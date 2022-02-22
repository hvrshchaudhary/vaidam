import React from 'react'
import ComparePrices from '../Components/ComparePrices'
import Conviniences from '../Components/Conviniences'
import Doctors from '../Components/Doctors'
import HospitalsNearby from '../Components/HospitalsNearby'
import Navbar from '../Components/Navbar'
import News from '../Components/News'
import Stats from '../Components/Stats'
import Stories from '../Components/Stories'
import TopHospitalsFor from '../Components/TopHospitalsFor'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Conviniences/>
      <HospitalsNearby/>
      <TopHospitalsFor/>
      <ComparePrices/>
      <Doctors/>
      <Stats/>
      <Stories/>
      <News/>
    </>
  )
}

export default Home