import React from 'react'
import unnati from '../assets/poster.png'

const About = () => {
  return (
    <div className='pt-32 justify-evenly flex  lg:flex-row flex-col gap-4'>
        <div className='md:w-[30em]  w-[22em] rounded-2xl mx-auto h-[36em] bg-white/20 backdrop-blur-md '>

        </div>
        <div className='md:w-[30em] w-[20em] my-auto mx-auto'>
            <img className='relative my-auto' src={unnati} alt="" />
        </div>
    </div>
  )
}

export default About