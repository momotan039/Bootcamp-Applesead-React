import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useRef } from 'react'

function App() {
const videoRef=useRef()
  return (
    <div className="App">
        <video ref={videoRef}  src="https://www.w3schools.com/html/movie.mp4"></video>
        <button onClick={()=>videoRef.current.play()}>play</button>
        <button onClick={()=>videoRef.current.pause()}>pause</button>
    </div>
  )
}

export default App
