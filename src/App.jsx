import { useState } from 'react'

import VendingMachine from './VendingMachine'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VendingMachine/>
    </>
  )
}

export default App
