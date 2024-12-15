import { useState } from 'react'



function App() {

  // let counter = 5;
  let [counter ,setcounter] =  useState(16)

  const addvalue = () => {
    counter= counter+1;
    setcounter(counter)
  }
  const removevalue = () => {
    if(counter>0){

      counter= counter-1;
      setcounter(counter)
      
    }
    else{
   <h1>cant go </h1>
    }
  }
  return (
    <>
  <h1>chai or react</h1>
  <h2>counter value:{counter}</h2>

    <button
    onClick={addvalue}
    >Add value</button>
    <br />
    <button
    onClick={removevalue}>remove value</button>

    </>
  )
}

export default App
