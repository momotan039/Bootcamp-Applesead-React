import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const imgRef=useRef()
  const imgRef2=useRef()

const toggleImageColor=(ref)=>{
  ref.current.classList.toggle('hover')
}


  return (
    <div className="App">
      <img ref={imgRef} onMouseOver={()=>toggleImageColor(imgRef)} onMouseLeave={()=>toggleImageColor(imgRef)} src="../src/assets/cows.jpg"/>
      <img ref={imgRef2} onMouseOver={()=>toggleImageColor(imgRef2)} onMouseLeave={()=>toggleImageColor(imgRef2)} src="../src/assets/lions.jpg"/>
    </div>
  )
}

export default App
