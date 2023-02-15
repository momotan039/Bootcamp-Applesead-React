import reactLogo from './assets/react.svg'
import './App.css'
import { data as Turtles } from './data.js'
import SelectOrder from './components/SelectOrder'

function App() {
  return (
    <SelectOrder turtles={Turtles}/>
  )
}

export default App
