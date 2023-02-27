import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import {BrowserRouter, createBrowserRouter,Outlet,Route,Router,RouterProvider, Routes} from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import Root from './Root'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/game',
          element:<Game/>
        }
      ]
    }
  ])
  return (
    
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
