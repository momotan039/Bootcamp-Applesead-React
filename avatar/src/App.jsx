import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Avatar from "./Avatar"
import HomePage from "./HomePage"
import Avatars from "./Avatars"
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0);
  const router=createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/avatars',
      element:<Avatars/>
    },
    {
      path:'/avatars/:name',
      element:<Avatar/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
