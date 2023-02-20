import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Spinner from './Spinner/Spinner'
import GridSpinner from './Grid Spinner/GridSpinner'

function App() {
  const [count, setCount] = useState(0)
  
  const spinner=<Spinner/>
  
  return (
    <div className="App">
      {/* {spinner} */}
      <GridSpinner/>
    </div>
  )
}

export default App
