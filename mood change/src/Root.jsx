import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const ThemeObj={isDark:null,change:()=>{}}
export const ThemeContext=createContext(ThemeObj)

export default function Root() {
  const [isDarkTheme,setIsDarkTheme]=useState(false)
  return (
    <ThemeContext.Provider value={{isDark:isDarkTheme,change:setIsDarkTheme}}>
    <Header/>
    <div className={`${isDarkTheme?'body dark':'body'}`}>
        <Outlet/>
    </div>
    </ThemeContext.Provider>
    
  )
}
