import React from 'react'
import Card1 from '../assets/Card1.svg'
import Card2 from '../assets/Card2.svg'
import Card3 from '../assets/Card3.svg'
import Manekshaw from '../assets/Manekshaw.svg'


const Venue = () => {
    return (
        <div className='pb-[300px]'>
            <div className='text-white md:text-4xl sm:text-3xl text-2xl lg:text-5xl text-center font-semibold px-20 pt-24'><h1 className='heading'>TIMELINE</h1></div>

            <div className='relative -left-[90px] sm:left-0' >
                <div className='relative md:flex md:flex-row  flex-col justify-around mx-32 top-[80px] py-14'>


                    <div className='w-[280px]  h-[300px]   my-4 backdrop-blur-md rounded-2xl'>
                        <img src={Card1} alt="" />
                    </div>
                    <div className='relative w-[280px] top-20  bg-transparent pt-10 md:pt-0 md:pb-0 pb-10 h-[300px]  my-4  md:top-[-100px]  backdrop-blur-md rounded-2xl'>
                    <img src={Card2} alt="" />
                        
                    </div>
                    <div className='relative w-[280px]  h-[300px] top-48 md:top-0 bg-transparent   my-4 backdrop-blur-md rounded-2xl'>
                        <img src={Card3} alt="" />
                    </div>
                </div>
            </div>

            <div className='top-[320px] md:top-[180px] bg-gradient-to-r relative mx-auto  w-[60%] md:w-[40%] lg:w-[25%] h-14 rounded-xl'>
                <img src={Manekshaw} alt="" />
            </div>
        </div>
    )
}

export default Venue