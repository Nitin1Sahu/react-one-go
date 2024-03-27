import React from 'react'
import "./App.css"

const App = () => {
  const [count, setCount] = React.useState(0); 
  const counterIncrement = () => {
    setCount(count => count + 1)
  }
  const counterDecrement = () => {
    setCount(count => count - 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button className='increment' onClick={counterIncrement}>Increase [+]</button>
      <button className='increment' onClick={counterDecrement}>Decrease [-]</button>
    </div>
  )
}

export default App