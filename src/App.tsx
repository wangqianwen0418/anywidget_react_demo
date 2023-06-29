import { useState } from "react";

import Input from './Input'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>AnyWidget + React Demo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Input />
       
      </div>
    </>
  )
}

export default App
