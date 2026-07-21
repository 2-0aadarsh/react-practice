import React, { useState } from 'react'

const Toggle = () => {

  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(prev => !prev);
  }

  return (
    <div className={`w-full h-full text-white p-8 flex flex-col items-start gap-4 ${theme ? 'bg-slate-800' : 'bg-gray-500'} `} >
        <h1>
            {theme ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </h1>
        
        <button
            className='bg-pink-800 px-2 py-1 rounded-sm text-sm'
            onClick={handleTheme} 
        >
            Toggle theme
        </button>      
    </div>
  )
}

export default Toggle