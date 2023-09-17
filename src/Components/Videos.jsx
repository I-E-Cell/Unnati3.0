import React from 'react'
import playbtn from '../assets/playbtn.svg'

const Videos = () => {
  return (
    <div className='my-32'>
      <div className=' text-white lg:text-5xl md:text-4xl sm:text-3xl px-20 text-center font-semibold   text-2xl my-8'> <h1 className='heading'>Unnati Moments</h1></div>
        <div className='flex justify-center gap-4 flex-col lg:flex-row '>
            <div className='shadoww w-[22em]  md:w-[37em] rounded-2xl h-[16em] md:h-[20em] bg-white/10'>
                <div className='w-[100%] h-[100%] hover:hidden left-5 bg-transparent relative '>
                    <img className='relative top-[14em] bg-transparent w-[13%] ' src={playbtn} alt="" />
                </div>
            </div>
            <div className='shadoww w-[22em] h-[16em]  md:w-[30em] rounded-2xl md:h-[20em] bg-white/10'>
            <div className='w-[100%] h-[100%] hover:hidden left-5 bg-transparent relative '>
                    <img className='relative top-[14em] bg-transparent w-[13%] ' src={playbtn} alt="" />
                </div>
            </div>
        </div>
        <div className='flex py-20 justify-center gap-4 flex-col lg:flex-row '>
            <div className='shadoww shadow-inner w-[22em] h-[16em]  md:w-[30em] rounded-2xl md:h-[20em] bg-white/10'>
            <div className='w-[100%] h-[100%] hover:hidden left-5 bg-transparent relative '>
                    <img className='relative top-[14em] bg-transparent w-[13%] ' src={playbtn} alt="" />
                </div>
            </div>
            <div className='shadoww w-[22em] h-[16em]  md:w-[37em] rounded-2xl md:h-[20em] bg-white/10'>
            <div className='w-[100%] h-[100%] hover:hidden left-5 bg-transparent relative '>
                    <img className='relative top-[14em] bg-transparent w-[13%] ' src={playbtn} alt="" />
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Videos