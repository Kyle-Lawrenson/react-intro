import { useState } from 'react'
import './App.css'
import'./Job'
import'./Person'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h2>This is my first React app</h2> 
       <Person name="Superman" age="40" />
       <Person name="Batman" age="48" />
       <Person name="Thor" age="290" />

       <Job></Job>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
     
    </>
  )
}

export default App
