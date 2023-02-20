import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [favoriteColor, setFavoriteColor] = useState('gray')

  useEffect(()=>{
    setTimeout(()=>setFavoriteColor('blue'),1000)
  })
  
  return (
    <div className="App">
      <h1>my favorite color : {favoriteColor}</h1>
      <div id=''></div>
    </div>
  )
}

export default App
