import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Quiz from './components/quiz/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Quiz></Quiz>
    </div>
  )
}

export default App
