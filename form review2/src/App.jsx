import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MYInput from './myInput'
import MyForm from './MyForm'

function App() {
  const [showForm,setShowForm]=useState(true)
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
    setShowForm(false)
  }

  return (
    <div className="App">
      
      <div className={showForm?'hidden':''}>
        <h2>first Name:{formData.fn}</h2>
        <h2>last Name:{formData.ln}</h2>
        <h2>Age:{formData.age}</h2>
        <p>h2{formData.text}</p>
        <button onClick={()=>setShowForm(true)}>back</button>
        <button>Submit</button>
      </div>
      <MyForm isShow={showForm} _showPreview={showPreview} handelChange={renderForm} />
    </div>
  )
}

export default App
