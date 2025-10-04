import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './AppmyCss.css'
import Intro1 from './IntroExpre/Intro1'
import Classes from './IntroExpre/Classes'
import ArrowFunctions from './IntroExpre/ArrowFunctions'
import Car from './Attributes/attributes'
import FirstIf from './Ifstatements/fruit'

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

      <div className="container">
        <div className="col">
          <Car />
        </div>
        <div className="col">
          <FirstIf />
        </div>


       </div>
    </>
  )
}

export default App