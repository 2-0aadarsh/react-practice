import React, { useState } from 'react'

const RandomNumberGenerator = () => {
  
  const [currentNumber, setCurrentNumber] = useState(0);
  
  const generateRandomNumber = () => {
    const randomNumber = Math.floor((Math.random()*100) + 1)
    setCurrentNumber(randomNumber);
  }
  
  return (
    <div>
      <h1>Current number : {currentNumber}</h1>

      <button 
        onClick={generateRandomNumber}
        className='px-2 py-2 text-[12px] border rounded-md cursor-pointer select-none'
      >
      Generate
      </button>
    </div>
  )
}

export default RandomNumberGenerator