import React from 'react'
import unnati from '../assets/poster.png'
import rulebook from '../assets/Rulebook.png'

const About = () => {
  return (
    <>
    <div className='text-white lg:text-5xl px-20 md:text-4xl sm:text-3xl text-2xl pt-24'>Rulebook ...</div>
    <div className=' justify-evenly flex p-6   lg:flex-row flex-col gap-4  '>
      
        <div className='md:w-[30em]  w-[22em] rounded-2xl mx-auto h-[39em] bg-white/20 backdrop-blur-md '>

        </div>
        <div className='md:w-[27em] w-[24em] my-auto mx-auto'>
            <img className='relative my-auto' src={rulebook} alt="" />
        </div>
    </div>
    </>
  )
}

export default About