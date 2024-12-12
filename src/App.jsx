import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './User';
import Friends from './Friends';


function App() {
  
  function handleClick()
  {
    alert('button Cancelled');
  }

  return (
    <>
      
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <User></User>

      <Team></Team>
    
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button>Click 2</button>
      <button onClick={() => {
        alert('third button clicked');
      }}>Click 3</button>
      <button>Click 4</button>
      
    </>
  )
}

export default App
