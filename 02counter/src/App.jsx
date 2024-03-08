import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0) //default value is 0

  const addValue=()=>{
    //counter+=1
    setCounter(counter + 1)
    setCounter(counter + 1)
    console.log('clicked',  counter);
  }

  const removeValue=()=>{
    if (counter == 0) { // to avoid negative counting
      counter = 0;
    } else {
      counter-=1
    }
    setCounter(counter)
    console.log('clicked', counter);
  } 

  return (
    <>
    <h1>React Project</h1>
    <h3>Counter value: {counter}</h3>
    <div id = 'buttons'>
     <button onClick={addValue}>Add value</button>
     <button onClick={removeValue}>Remove value</button>
    </div>
    <p>footer:{counter}</p>
      
    </>
  )
}

export default App
