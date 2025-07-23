// import { useState } from 'react'
import Button from './components/Button'
import Info from './components/Info'
import Anchor from './components/Anchor'
import SlotMap from './components/SlotMap'
import './App.css'

function App() {
  

  return (
    <>
      
      <div>
        <h3> Smart Slotting </h3>
        <Anchor string='Upload Data' url='#' />
        <Anchor string='Slot Map' url='#' />
        <Anchor string='Heat Map' url='#' />
        <Anchor string='AI suggestions' url='#' />
        <Anchor string='Report' url='#' />
      </div>
      <div>
        <h1>Warehouse Overview</h1>
        <SlotMap />
        <Button name='Upload Layout'/>
        <div>
          <Info string = 'Avg Pick Path Time ' value = '12.8min' />
          <Info string = 'Congestion Zones ' value = '3' />
          <Info string = 'Suggestions Applied' value = '18' />
        </div>
      </div>
      
      
    </>
  )
}

export default App
