import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos'; // Adjust the path as needed


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello Dear Learn Redux Toolkit</h1>
     <AddTodo />
     <Todos />
    </>
  )
}

export default App