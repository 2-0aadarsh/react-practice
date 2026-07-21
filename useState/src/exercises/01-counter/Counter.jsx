import React, { useState } from 'react'


/*
requirements : 
    Create a component that : 
        1. displays count and
        2. When the increment button is clicked, count incremented 
        3. When the decrement button is clicked, count decremented 
        4. When the reset button is clicked, count reset 
*/
const Counter = () => {

  const [count, setCount] = useState(0);  
  console.log("Component renders")

  const handleIncrement = () => {
    console.log("Incrementing the value..")
    setCount(prev => prev+1);  // this will create an update object : { action : count+1}

    // handler function done executing, thus update object is send the the useState hook's update queue
  }

  const handleDecrement = () => {
    console.log("Decrementing the value..")
    setCount(prev => prev-1);  // this will create an update object : { action : count-1}

    // handler function done executing, thus update object is send the the useState hook's update queue
  }

  const handleReset = () => {
    console.log("Reseting the value..")
    setCount(0);  // this will create an update object : { action : 0}

    // handler function done executing, thus update object is send the the useState hook's update queue
  }

  return (
    <div className='w-full h-full bg-slate-800 text-white p-8 flex flex-col items-start gap-4'>
        <h1>Value of the count is : {count}</h1>

        <div className="flex gap-6">
            {/* Increment button */}
            <button
                className='bg-green-500 px-2 py-1 rounded-sm text-sm'
                onClick = {handleIncrement}
            >
                Increment
            </button>

            {/* Decrement button */}
            <button
                className='bg-red-500 px-2 py-1 rounded-sm text-sm'
                onClick = {handleDecrement}
            >
                Decrement
            </button>

            {/* Reset button */}
            <button
                className='bg-blue-500 px-2 py-1 rounded-sm text-sm'
                onClick = {handleReset}
            >
                Reset
            </button>
        </div>
    </div>
  )
}

export default Counter
