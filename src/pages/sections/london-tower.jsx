import React from 'react'
import Navbar from '../../components/navbar'
import NavDown from '../../components/navdown'
import Motivation from './motivation'

const LondonTower = () => {
  return (
    <div className='london_tower'>
      <div className="new-background">
            <Navbar />
        <NavDown />
        <Motivation />
      </div>
    
    </div>
  )
}

export default LondonTower