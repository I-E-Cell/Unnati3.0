import React from 'react'
import first from '../assets/1st.jpg'
import second from '../assets/2nd.jpg'
import third from '../assets/3rd.jpg'



const Winners = () => {
    return (
        <div className='my-3 relative   '>
            <div className=' text-white relative   lg:text-5xl md:text-4xl sm:text-3xl px-20 text-center font-semibold  text-2xl my-8'> <h1 className='heading'>WINNERS</h1></div>
            <div className='text-center py-2  font-extralight text-[18px] text-white'>
                <h1 className='py-[1px]  '>Winning isn't Everything, it's the only thing..!!</h1>
            </div>
            <div className='flex flex-col   px-auto  md:flex-row gap-4 md:gap-9 relative top-11 pb-14 mx:auto md:justify-around '>

                <div className='h-[23em] hover:scale-105  duration-300 relative mx-auto md:top-20 top-0 w-[17em] bg-white/[13%] border-[1px]  border-white/40 rounded-2xl brightness-75 backdrop-blur-lg'>
                    <div className='relative w-[15em] h-[14em] top-2 shadoww bg-white/[12%] my-3 rounded-2xl  z-5  mx-auto'>
                        <img className='relative rounded-2xl w-[91%] mx-auto top-2 h-[91%]' src={second} alt="" />
                    </div>
                    <div className='bg-transparent text-white text-center my-6'>
                        <h1 className='bg-transparent text-2xl font-semibold'>SECOND</h1>
                        <h1 className='bg-transparent w-[85%] mx-auto bg-white[10%]  rounded-lg inner2  my-4 p-[2px] text-2xl' >NoMoreParadox</h1>

                    </div>
                </div>
                <div className='h-[23em] w-[17em] hover:scale-105  duration-300  mx-auto bg-white/[13%] border-[1px]  border-white/40 rounded-2xl brightness-75 backdrop-blur-lg'>
                    <div className='relative w-[15em] h-[14em] top-2 shadoww bg-white/[12%] my-3 rounded-2xl  z-5  mx-auto'>
                        <img className='relative rounded-2xl w-[91%] mx-auto top-2 h-[91%]' src={first} alt="" />
                    </div>
                    <div className='bg-transparent text-white text-center my-6'>
                        <h1 className='bg-transparent text-2xl font-semibold'>FIRST</h1>
                        <h1 className='bg-transparent w-[70%] mx-auto bg-white[10%]  rounded-lg inner2  my-4 p-[2px] text-2xl' >T.S.A.R</h1>

                    </div>
                </div>

                <div className='h-[23em] w-[17em] hover:scale-105  duration-300  mx-auto relative md:top-20 top-0  bg-white/[13%] border-[1px]  border-white/40 rounded-2xl brightness-75 backdrop-blur-lg'>
                    <div className='relative w-[15em] h-[14em] top-2 shadoww bg-white/[12%] my-3 rounded-2xl  z-5  mx-auto'>
                        <img className='relative rounded-2xl w-[91%] mx-auto top-2 h-[91%]' src={third} alt="" />
                    </div>
                    <div className='bg-transparent text-white text-center my-6'>
                        <h1 className='bg-transparent text-2xl font-semibold'>THIRD</h1>
                        <h1 className='bg-transparent w-[70%] mx-auto bg-white[10%]  rounded-lg inner2  my-4 p-[2px] text-2xl' >Bagge Bille</h1>

                    </div>
                </div>
            </div>
        </div>



    )
}

export default Winners