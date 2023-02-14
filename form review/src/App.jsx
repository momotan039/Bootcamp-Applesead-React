import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MYInput from './myInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <form action="">
      <MYInput id='i1' label="I read the term of the app" checked={false}/>
      <MYInput id='i2' label="I acept the term of the app" checked={false}/>
      <MYInput id='i3' label="I want to get the weekly newws letter" checked={true}/>
      <MYInput id='i4' label="I want to get sales and offers" checked={true}/>
      </form>
    </div>
  )
}

export default App
