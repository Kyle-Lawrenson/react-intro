import { useState } from 'react'
import './App.css'
import'./Job'
import'./Person'

const App = () => {

  return (
      <div>
       <h2>My First React App</h2> 
       <Person name="Superman" age="40" />
       <Job jobName="Software Developer"/>
       <Person name="Batman" age="48" />
       <Job jobName="Millionnair"/>
       <Person name="Thor" age="290" />
       <Job jobName="Carpenter"/>
       
      </div>
  )
}

export default App
