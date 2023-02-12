import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("title changed");
    document.title ="AppleSeeds React App";
  })
  return (
    <div className="App">
     <h1>AppleSeeds React App</h1>
     <button>Click Me</button>
    </div>
  )
}

export default App
