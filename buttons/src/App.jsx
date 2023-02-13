import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button text='Important' />
      <Button text='Not Important' />
    </>
  )
}

export default App
