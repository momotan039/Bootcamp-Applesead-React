import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Box from './Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Box></Box>
       <Box bg={'yellow'} h={'200px'} w={'200px'} showTime={1500} hideTime={3500}></Box>
       <Box bg={'green'} h={'300px'} w={'250px'} showTime={2000} hideTime={3000}></Box>
    </div>
  )
}

export default App
