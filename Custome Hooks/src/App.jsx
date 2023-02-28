import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Articles } from './components/Articles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Articles/>
    </div>
  )
}

export default App
