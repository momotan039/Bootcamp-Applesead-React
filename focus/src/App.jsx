import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const inputRef=useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <div className="App">
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
