import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>AppleSeeds React App</h1>
     <button>Click Me</button>
    </div>
  )
}

export default App
