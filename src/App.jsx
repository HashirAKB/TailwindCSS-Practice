import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{background:"yellow"}}>Hai</div>
      <div style={{background:"Blue"}}>Hashir</div>
      <div style={{background:"Red"}}>Ahmed</div>
    </div>
    </>
  )
}

export default App
