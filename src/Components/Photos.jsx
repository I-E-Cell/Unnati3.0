// ------------------------------component----------------------------------//

import React from 'react'
import unnati from '../assets/Unnati1-min.jpg'
import unnati2 from '../assets/unnati2-min.jpg'
import unnati3 from '../assets/unnati3-min.jpg'
import unnati4 from '../assets/unnati4-min.jpg'


const Photos = () => {
  return (
    <div className='my-3 relative mx-3  md:left-0 '>
      <div className=' text-white relative  lg:text-5xl md:text-4xl sm:text-3xl px-20 text-center font-semibold  text-2xl my-8'> <h1 className='heading'>Image Gallery</h1></div>
        <div className='flex justify-center gap-4 flex-col lg:flex-row '>
            <div className='overflow:hidden mx-auto lg:mx-0  shadoww w-[22em]  md:left-0 relative   md:w-[37em] rounded-2xl h-[16em] md:h-[20em] bg-white/10'>
              <img className='relative rounded-2xl w-[95%] mx-auto my-3 h-[95%]' src={unnati} alt="moments" />
            </div>
            <div className='shadoww w-[22em] mx-auto lg:mx-0  h-[16em]  md:w-[30em]  md:left-0 relative rounded-2xl md:h-[20em] bg-white/10'>
            <img className='relative rounded-2xl w-[95%] mx-auto my-3 h-[95%]' src={unnati2} alt="moments" />

            </div>
        </div>
        <div className='flex py-20 justify-center gap-4 flex-col lg:flex-row '>
            <div className='shadoww shadow-inner mx-auto lg:mx-0  w-[22em] h-[16em]   md:left-0 relative md:w-[30em] rounded-2xl md:h-[20em] bg-white/10'>
            <img className='relative rounded-2xl w-[95%] mx-auto my-3 h-[95%]' src={unnati3} alt="moments" />

            </div>
            <div className='shadoww w-[22em] mx-auto lg:mx-0  h-[16em]  md:w-[37em]  md:left-0 relative rounded-2xl md:h-[20em] bg-white/10'>
              <img className='relative rounded-2xl w-[95%] mx-auto my-3 h-[95%]' src={unnati4} alt="moments" />
                
            </div>
        </div>
        

    </div>
  )
}

export default Photos