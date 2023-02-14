import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Comp from './comp'
import { useEffect } from 'react'

function App() {
  const [isBox1,show_Box1]=useState(true)

  const toggleBoxes=()=>{
    show_Box1(!isBox1)
  }

  return (
    <div className="App">
      <Comp toggleBoxes={toggleBoxes} ShowBox={isBox1}/>
      <Comp toggleBoxes={toggleBoxes} ShowBox={!isBox1}/>
    </div>
  )
}

export default App
