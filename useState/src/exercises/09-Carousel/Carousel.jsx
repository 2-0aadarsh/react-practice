import React, { useState } from 'react'

const Carousel = () => {

  const images = [
                    {
                      id: 1,
                      title: "Image 1",
                      url: "https://images.unsplash.com/photo-1776811798636-08a1e715b236?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                      id: 2,
                      title: "Image 2",
                      url: "https://images.unsplash.com/photo-1776846320499-ca654ebe2659?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                      id: 3,
                      title: "Image 3",
                      url: "https://images.unsplash.com/photo-1776891483774-c771d088da16?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                      id: 4,
                      title: "Image 4",
                      url: "https://plus.unsplash.com/premium_photo-1707988179907-04a2b04be0b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                      id: 5,
                      title: "Image 5",
                      url: "https://images.unsplash.com/photo-1776793931921-a3967dba981d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                ]

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = ()  => {
    if(currentImage === 0) return;
    setCurrentImage((prev) => prev-1);
  }

  const handleNext = ()  => {
    if(currentImage === images.length-1) return;
    setCurrentImage((prev) => prev+1);
  }
  return (
    <div className="w-full h-full bg-slate-800 text-white p-8 flex flex-col justify-center items-center gap-4">
        <div className='h-80 w-80'>
            <img src={images[currentImage].url}  className='w-full h-full' alt={images[currentImage].title} />      
        </div>

        <div className="w-80 flex justify-between">
            <button  onClick={handlePrev} disabled={currentImage === 0} className={`text-sm px-2 py-1 rounded cursor-pointer bg-slate-700 disabled:opacity-50 disabled:cursor-auto hover:bg-gray-700`} >prev</button>
            <button  onClick={handleNext} disabled={currentImage === images.length-1} className='text-sm px-2 py-1 rounded cursor-pointer bg-slate-700 disabled:opacity-50 disabled:cursor-auto hover:bg-gray-700' >next</button>
        </div>
    </div>
  )
}

export default Carousel
