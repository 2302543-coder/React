import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './AppmyCss.css'
import Intro1 from './IntroSamples/Intro1'
import Classes from './IntroSamples/Classes'
import ArrowFunctions from './IntroSamples/ArrowFunctions'

function App() {
  return (
    <>
    <div>
    <h1  id="title">My React Practice</h1>
      <Intro1 /> 
    <h2 id="title">Classes</h2>
      <Classes />
      <h1 id="title">Functions</h1>
      <ArrowFunctions />
      </div>
    </>
    
  )
}

export default App