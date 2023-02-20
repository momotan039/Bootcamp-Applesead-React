import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  let [color, setColor] = useState('red')
  let [classEffect, setClassEffect] = useState('')
  const colors=['red','yellow','blue','green','black']
  let finish=false

  useEffect(()=>{
    let index=0

    const id=setInterval(() => {
      if(!finish&&index===colors.length)
      {
        finish=true
        setClassEffect('circle')
        return
      }
      
      if(index==color.length+2)
      {
        clearInterval(id)
        return
      }

      setColor(colors[index++])

    }, 500);

    return ()=>clearInterval(id)

  },[])

  return (
    <div className="App">
      <h1>color:{color}</h1>
     <div  style={{backgroundColor:color}}  className={"box "+classEffect}></div>
    </div>
  )
}

export default App
