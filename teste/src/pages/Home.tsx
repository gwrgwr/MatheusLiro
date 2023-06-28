import React from 'react'
import ButtonHome from '../components/ButtonHome'
import InputHome from '../components/InputHome'
import TitleHome from '../components/TitleHome'
import './Home.css'
const Home = () => {
  return (
    <div className='homeDiv'>
      <TitleHome />
      <InputHome />
      <ButtonHome />
    </div>
  )
}

export default Home