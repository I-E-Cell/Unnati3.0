import React from 'react'
import unnati from '../assets/poster.png'
import rulebook from '../assets/Rulebook.png'

const About = () => {
  return (
     <div id='rule'>
    <div className='text-white lg:text-5xl px-20 md:text-4xl sm:text-3xl text-2xl font-semibold text-center pt-24 py-8'> <h1 className='heading'> RULEBOOK</h1></div>
    <div className=' justify-evenly flex p-6   lg:flex-row flex-col gap-4  '>
      
        <div className='md:w-[30em]  w-[22em] rounded-2xl mx-auto h-[39em] relative right-3 bg-white/20 backdrop-blur-md '>
          <div className=' bg-transparent'>
            <h3 className='bg-transparent text-white text-2xl font-light text-center py-5'> Important Guidelines</h3>
            <ol className='text-white max-w-[90%] bg-transparent mx-auto'>
              <li className='bg-transparent font-light'>
              All the invited teams should be seated by 17:00 hrs in the Maneekshaw Hall
              </li>
              <li  className='bg-transparent py-3 font-light'>
              All the teams in the Hall will be informed about the event flow and how they are going to pitch serial-wise.



              </li>
              <li className='bg-transparent py-3 font-light'>
              The participants are requested to make their own teams of at least 2-3 members. We expect good co-operation from you guys since this is done to promote interaction among you.
              </li>
              <li className='bg-transparent py-3 font-light'>The teams will be divided into batches of two teams, each receiving a company  with similar business interests to represent. (Example:- Uber and Ola, Boat and JBL, Swiggy and Zomato, etc.)</li>
               <li className='bg-transparent py-3 font-light'>
               Each team will be given 20 mins to prepare about the company/startup given to them before presenting on the stage.

               </li>
               <li className='bg-transparent py-3 font-light hidden md:block'>
               These batches will be called upon the stage to present their cases together( or rather against each other 😈). The two teams will be performing simultaneously on the stage (in a kinda face-off fashion).
               </li>
            </ol>
          </div>

        </div>
        <div className='md:w-[27em] w-[21em] sm:w-[24em] my-auto mx-auto'>
            <img className='relative my-auto' src={rulebook} alt="" />
        </div>
    </div>
    </div>
  )
}

export default About
