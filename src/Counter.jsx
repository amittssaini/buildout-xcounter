import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);

    const incrementCount=()=>{
        setCount((prev)=>prev+1)
    }
    const decrementCount=()=>{
        setCount((prev)=>prev-1);
    }
  return (

    <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default Counter