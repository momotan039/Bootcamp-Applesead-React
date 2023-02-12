import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const data=['Hello World']
  const number1=10
  const number2=15
  const sum=(n1,n2)=>n1+n2
 const string = "I love React!"
  return (
    <>
    <h1>Basics of JSX</h1>
    <h2>Here my data : {data}</h2>
    <h2>First number : {number1}</h2>
    <h2>Second number : {number2}</h2>
    <h2>Sum numbers : {sum(number1,number2)}</h2>
    <h3>length of :{string.length}</h3>
    </>
  )
}

export default App
