import './App.css'
import TodoContianer from './components/TodoContianer'

function App() {

  return (
    <div className="App">
      <h1>ToDo's</h1>
      <h2>Local Storage CRUD app</h2>
      <span>CURD - Create Read Update Delete</span>
      <TodoContianer/>
    </div>
  )
}

export default App
