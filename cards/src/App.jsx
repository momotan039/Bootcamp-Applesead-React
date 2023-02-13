import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='container'>
        <Card title='card 1' desc='description 1' img='https://images.unsplash.com/photo-1675163918080-6d9c86941625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDgzMDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYyODA0NTI&ixlib=rb-4.0.3&q=80&w=1080'>
        </Card>
        <Card title='card 2' desc='description 2' img='https://images.unsplash.com/photo-1674665887843-71b844be2e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDgzMDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYyODA0NTI&ixlib=rb-4.0.3&q=80&w=1080' />
        <Card title='card 3' desc='description 3' img='https://images.unsplash.com/photo-1673982282449-819ee24a9912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDgzMDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzYyODA0NTI&ixlib=rb-4.0.3&q=80&w=1080' />
      </div>
    </div>
  )
}

export default App
