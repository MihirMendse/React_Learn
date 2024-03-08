import { useState } from 'react'
import './App.css'
import Cards from './cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-900 p-3 rounded-xl mb-4'>Tailwind CSS</h1>
     <Cards username = "User1" text = "Hello! I am a Software Engineer."/>
     <Cards username = "User2" text = "Hello! I am a Data Analyst."/>
     <Cards/>

    </>
  )
}   

export default App
