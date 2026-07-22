import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";

const Accordion = () => {

  /*
    [ { id : "", question : "", answer : ""} ]
  */ 
  const [data, setData] = useState(
                                    [
                                        { id : "#1", question : "What is React?", answer : "React is a JavaScript library for building user interfaces.", showAnswer : false},
                                        { id : "#2", question : "What is React?", answer : "React is a JavaScript library for building user interfaces.", showAnswer : false}
                                    ]
                                )

    const handleShowAnswer = (id) => {
        // Loop over array, copy and toggle only the target object
        setData(data.map((item) => (
            item.id === id ? {...item, showAnswer : !item.showAnswer} : item
        )))
    }

  return (
    <div className='w-full h-full bg-slate-800 text-white p-8 flex flex-col items-start gap-4'>
        {
            data && data.map((item) => (
                <div key={item.id} className='flex flex-col gap-4'>
                    <div className="flex items-center gap-3">
                        <p>{item.id}</p>
                        <h2 className="">{item.question}</h2>
                        
                        <button onClick={() => handleShowAnswer(item.id)}  className={`text-2xl cursor-pointer transition-transform duration-200 ${ item.showAnswer ? 'rotate-180 text-slate-600' : 'text-white' }`}
                        >
                            <MdOutlineArrowDropDown />
                        </button>
                    </div>

                    {item.showAnswer && 
                        (<div className="text-[12px]">
                            <h3>{item.answer}</h3>
                        </div>)
                    }
        
                </div>
            ))
        }
    </div>
  )
}

export default Accordion