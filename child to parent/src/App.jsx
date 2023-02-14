import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CustomeButton from './CustomButton';

function App() {
  const colors = ["blue","red","yellow"];
  const [selectedButton,setButton]=useState('')

  const clickButton=(color)=>{
    debugger
  setButton(color)
  }
  return (
    <div className="App">
     <div className="flex">
     {
      colors.map(c=>{
        return <CustomeButton setButton={clickButton} color={c} />
      })
     }
     </div>
     <h1>you just selected:{selectedButton}</h1>
    </div>
  )
}

export default App
