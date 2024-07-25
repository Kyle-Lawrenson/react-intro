// import { useState } from 'react'
import './App.css'
import Job from './Job'
import Person from './Person'
import Pet from './Person'
const App = () => {

  return (
      <div>
       <h2>My First React App</h2> 
       <Person name="Superman" age="40" />
       <Job jobname="Software Developer"/>
       <Person name="Batman" age="48" Pet/>
       <Job jobname="Millionnair"/>
       <Person name="Thor" age="290" />
       <Job jobname="Carpenter"/>
       
      </div>
  )
}

export default App
