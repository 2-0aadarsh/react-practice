import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  
  useEffect(() => {
    
    if(isRunning) {
      timerRef.current = setInterval(() =>{
        console.log(time);
        setTime((prev) => prev+1);
      }, 1000)
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
      // setIsRunning(false);
    }
  }, [isRunning])


  return (
    <div className='w-full h-full bg-slate-800 text-white p-8 flex flex-col items-start gap-4'>
      <h1>Stopwatch</h1>   

      <p>time : {time}</p> 
      <button className='cursor-pointer px-2 py-1 rounded border' onClick={() => {
        // clearInterval(timerRef.current);
        setIsRunning(false);
        // timerRef.current = null;
      }}>
        stop
      </button>

      <button className='cursor-pointer px-2 py-1 rounded border' onClick={() => {
        setIsRunning(true);
      }}>
        start
      </button>

      <button className='cursor-pointer px-2 py-1 rounded border' onClick={() => {
        // clearInterval(timerRef.current);
        setIsRunning(false);
        // timerRef.current = null;
        setTime(0);
      }}>
        Reset
      </button>
    </div>
  )
}

export default Stopwatch