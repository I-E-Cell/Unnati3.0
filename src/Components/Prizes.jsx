import React from 'react'
import second from '../assets/second.png'
import first from '../assets/first.png'
import third from '../assets/third.png'
import gridImage from "../assets/grid.png"


const Prizes = () => {

 
  return (
    <div className='prizes mt-32 bg-transparent '>
      <div className='h-[80%]' style={{ backgroundImage: `url(${gridImage})`, backgroundSize: 'cover' }}>
        <div className='relative bg-transparent -left-[80px] sm:left-0 md:flex md:flex-row  flex-col justify-around mx-32  py-14'>

          <div className='bg-transparent mt-40 '>
            <div className='w-[290px] h-[290px] bg-gradient-to-r border-2  border-pink-400 shadow-2xl shadow-white/60 from-cyan-500 to-blue-500 opacity-60  my-4 backdrop-blur-md rounded-2xl'>
              <div className='inner relative my-6 border-2  border-pink-400 w-[240px] mx-auto h-[240px] bg-gradient-to-r shadow-2xl shadow-white/60 from-cyan-500 to-blue-500  backdrop-blur-md rounded-2xl'>
                <img className='relative mx-auto my-auto h-[100%] bg-transparent' src={second} alt="" />
              </div>

            </div>
            <div className='text-white bg-transparent'>
              <h3 className='bg-transparent' >2ND PRIZE</h3>
              <br />
              <h3 className='bg-transparent'>₹3000</h3>
              <br />

              <h5 className='  max-w-[250px] bg-transparent'>
                Invitation to next Industry Visit by ECell
                Styled Bottles and lots of goodies
                Certificate of achievement
              </h5>
            </div>
          </div>
          <div className='bg-transparent mt-40 '>
            <div className='w-[290px] h-[290px] bg-gradient-to-r border-2  border-pink-400 shadow-2xl shadow-white/60 from-cyan-500 to-blue-500 opacity-60  my-4 backdrop-blur-md rounded-2xl'>
              <div className='inner relative my-6 border-2  border-pink-400 w-[240px] mx-auto h-[240px] bg-gradient-to-r shadow-2xl shadow-white/60 from-cyan-500 to-blue-500  backdrop-blur-md rounded-2xl'>
                <img className='relative mx-auto my-auto bg-transparent' src={first} alt="" />
              </div>

            </div>
            <div className='text-white bg-transparent'>
              <h3 className='bg-transparent'>1ST PRIZE</h3>
              <br />
              <h3 className='bg-transparent'>₹3000</h3>
              <br />

              <h5 className='  max-w-[250px] bg-transparent'>
                Invitation to next Industry Visit by ECell
                Styled Bottles and lots of goodies
                Certificate of achievement
              </h5>
            </div>
          </div>
          <div className='bg-transparent mt-40 '>
            <div className='w-[290px] h-[290px] bg-gradient-to-r border-2  border-pink-400 shadow-2xl shadow-white/60 from-cyan-500 to-blue-500 opacity-60  my-4 backdrop-blur-md rounded-2xl'>
              <div className='inner relative my-6 border-2  border-pink-400 w-[240px] mx-auto h-[240px] bg-gradient-to-r shadow-2xl shadow-white/60 from-cyan-500 to-blue-500  backdrop-blur-md rounded-2xl'>
                <img className='relative mx-auto my-auto bg-transparent' src={third} alt="" />
              </div>

            </div>
            <div className='text-white bg-transparent'>
              <h3 className='bg-transparent'>3RD PRIZE</h3>
              <br />
              <h3 className='bg-transparent'>₹3000</h3>
              <br />

              <h5 className='  max-w-[250px] bg-transparent'>
                Invitation to next Industry Visit by ECell
                Styled Bottles and lots of goodies
                Certificate of achievement
              </h5>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Prizes