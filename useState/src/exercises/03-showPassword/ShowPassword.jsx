import React from 'react'
import { useState } from "react";

const ShowPassword = () => {

  const [showPassword, setShowPassword] = useState(false);  

  const handleShowPassword = () => {
    setShowPassword((prev)  => !(prev));
  }

  return (
    <div className='w-full h-full bg-slate-800 text-white p-8 flex flex-col items-start gap-4'>
      <input type={showPassword ? "text" : "password"} className='border outline-none px-2 py-1 text-[12px] w-1/2 tracking-[4px]' />

      <button 
        onClick={handleShowPassword}
        className='px-2 py-2 text-[12px] border rounded-md cursor-pointer select-none'
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  )
}

export default ShowPassword