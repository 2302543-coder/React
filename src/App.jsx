import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const myElement = <h5>Hello World</h5> 
   const myElement2 =<h5>The result of 5+5 is {5+5}</h5>
   const name = "John Doe"
   const age=25
  return (
    <>
    {myElement}
    {myElement2}
    <h1>Hello, {name}</h1>
    <h5>you are {age} years old</h5>
    </>
    
  )
}

export default App