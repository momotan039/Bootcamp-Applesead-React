import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";
import Home from './components/home/home';
import Admin from './components/admin/Admin';
import Login from './components/login/Login';

function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'admin',
      element:<Admin/>
    },
    {
      path:'login',
      element:<Login/>
    }
  ])
  return (
    <div className="App">
      <h2>admin</h2>
      <h2>login</h2>
      <h2>homePage</h2>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
