import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const [counter,setCounter] = useState(0)

 
 const addValue=()=>{
  console.log("clicked",counter);
  setCounter(counter+1)

 }

 const removeValue=()=>{
  if(counter<=0){
    alert("cannot go negative")
  }
  else{
  setCounter(counter-1)
  }
    
 }





  return (
    <>
      <h1>vitereact</h1>
      <h2>counter value : {counter} </h2>
      <button onClick={addValue}>Add value</button><br /><br /><br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
