import { useState } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";


const Like = () => {

  const [toggleLike, setToggleLike] = useState(false);
  const handleLike = () => {
    setToggleLike((prev) => !prev)
  }  

  return (
    <div className='w-full h-full bg-slate-800 text-white p-8 flex flex-col items-start gap-4'>
        <h1>Post is {toggleLike ? "Liked" : "Not Liked"}</h1>
        {toggleLike ? 
                (<div className="flex  gap-2">
                    <button onClick={handleLike}>
                        <IoIosHeart className="text-red-500 text-2xl"/>
                    </button>
                    <span>1 like</span>
                </div> ) 
                :
                (<div className='flex gap-2'>
                    <button onClick={handleLike} >
                        <IoIosHeartEmpty className="text-2xl" />
                    </button>
                    <span>0 Like</span>
                </div>) 
        }
      

      {/* <Heart className='bg-red-500' /> */}
    </div>
  )
}

export default Like