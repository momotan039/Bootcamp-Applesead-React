import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Articles } from './components/Articles'
import { Books } from './components/Books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Articles/>
      <Books/>
    </div>
  )
}

export default App
