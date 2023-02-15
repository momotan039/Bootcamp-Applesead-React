import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { data as users } from './assets/data'

function App() {
  return (
    <div className="App">
      <div className="flex">
      {
          users.map(u=>{

            return <div className='card'>
              <h3>Name: {u.name}</h3>
              <h4>BirthDay: {u.birthday}</h4>
              <h4>meats: {u.favoriteFoods.meats.join(' , ')}</h4>
              <h4>fish: {u.favoriteFoods.fish.join(' , ')}</h4>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
