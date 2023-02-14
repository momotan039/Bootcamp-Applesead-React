import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  function changeColor(){
  if(count==0)
  return ''
  else if(count>0)
  return 'green'
   
  return 'red'
}

  return (
    <div className="App">
      <h1 className={changeColor()}>Your number:{count}</h1>
        <button onClick={()=>setCount(++count)}>Plus</button>
        <button onClick={()=>setCount(--count)}>Minus</button>
    </div>
  )
}

export default App
