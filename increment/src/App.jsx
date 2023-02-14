import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  let [number, setNumber] = useState(0)

  return (
    <div className="App">
      <h1>here is the num:{number}</h1>
      <button onClick={()=>{setNumber(number+1)}}>increment</button>
      <br /><br />
      <button onClick={()=>{setNumber(number-=1)}}>decrement</button>
    </div>
  )
}

export default App
