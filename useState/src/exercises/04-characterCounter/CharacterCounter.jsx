import React, { useEffect, useState } from 'react'

const CharacterCounter = () => {

  const [characters, setCharacters] = useState("");

  const handleCountCharacters = (event) => {
    setCharacters(prev => (event.target.value));
  }
  useEffect(() => {
    console.log(characters);
  },[characters])

  console.log("rendering..")

  return (
    <div className='w-full h-full bg-slate-800 text-white p-8 flex flex-col items-start gap-4'>
      <h1>Count characters : {characters.length}</h1>
      <input 
        onChange={handleCountCharacters}
        value={characters}
        type="text" className='border outline-none px-2 py-1 text-[12px] w-1/2 tracking-[4px]' 
      />


    </div>
  )
}

export default CharacterCounter