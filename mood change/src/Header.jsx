import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { ThemeContext } from './Root'
export default function Header() {
  const theme=useContext(ThemeContext)
  return (
    <header className={`${theme.isDark?'dark':''}`}>
        <nav>
          <Link to="/">home</Link>
          <Link to="/game">game</Link>
        </nav>
        <button onClick={()=>theme.change(!theme.isDark)}>
          {theme.isDark?'light':'dark'}
        </button>
      </header>
  )
}
