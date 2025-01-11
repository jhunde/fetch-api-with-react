import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomPhoto from './RandomPhoto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomPhoto/>
    </>
  )
}

export default App
