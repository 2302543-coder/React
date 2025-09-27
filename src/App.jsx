import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './AppmyCss.css'
import Intro1 from './IntroSamples/Intro1'
import Classes from './IntroSamples/Classes'

function App() {
  return (
    <>
    <h1  id="title">My React Practice</h1>
    <div className="one">
      <Intro1 />
    </div>
     <Classes />
    </>
    
  )
}

export default App