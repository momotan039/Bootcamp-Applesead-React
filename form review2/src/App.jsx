import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MYInput from './myInput'
import MyForm from './MyForm'

function App() {
  const [formData, setFormData] = useState({
    fn: '',
    ln: '',
    age: '',
    text: '',
    submit:false
  })

  const renderForm = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const showPreview = () => {
    event.preventDefault()
  }

  return (
    <div className="App">
      <div className="hidden">
        <h1>fn:{formData.fn}</h1>
        <h1>ln:{formData.ln}</h1>
        <h1>age:{formData.age}</h1>
        <h1>text:{formData.text}</h1>
        <button onClick={()=>console.log("fds")}>back</button>
      </div>
      <MyForm _showPreview={showPreview} handelChange={renderForm} />
    </div>
  )
}

export default App
