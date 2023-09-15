import React from 'react'

const Venue = () => {
    return (
        <div className='pb-[300px] '>
            <div className='relative -left-[20px] sm:left-0' >
                <div className='relative md:flex md:flex-row  flex-col justify-around mx-32 top-[280px] py-14'>


                    <div className='w-[230px] h-[300px] bg-gradient-to-r shadow-2xl shadow-white/60 from-cyan-500 to-blue-500 opacity-40  my-4 backdrop-blur-md rounded-2xl'>

                    </div>
                    <div className='relative w-[230px] shadow-2xl shadow-white/60 h-[300px] bg-gradient-to-r from-indigo-500 via-purple-500 my-4 to-pink-500 opacity-40 md:top-[-100px]  backdrop-blur-md rounded-2xl'>

                    </div>
                    <div className='w-[230px] h-[300px] shadow-2xl bor shadow-white/60 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-40  my-4 backdrop-blur-md rounded-2xl'>

                    </div>
                </div>
            </div>

            <div className='top-[280px] bg-gradient-to-r relative mx-auto from-indigo-500 via-purple-500 text-center justify-center to-pink-500 w-[60%] md:w-[40%] lg:w-[25%] h-14 rounded-xl'>
                <h1 className='relative text-white h-[100%] text-2xl bg-transparent pt-[10px] font-semibold'>Manekshaw Hall</h1>
            </div>
        </div>
    )
}

export default Venue