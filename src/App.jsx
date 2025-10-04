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
      <div className="container">
        <div className="col">
          <Intro1 />
        </div>
        <div className="col">
          <Classes />
        </div>
        <div className="col">
          <ArrowFunctions />
        </div>
      </div>
    </>
  )
}

export default App