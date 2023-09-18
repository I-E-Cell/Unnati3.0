import React from 'react'
import second from '../assets/second.png'
import first from '../assets/first.png'
import third from '../assets/third.png'
import gridImage from "../assets/grid.png"


const Prizes = () => {


  return (
    <div id='prize' className='prizes pt-11 md:pt-0  bg-transparent '>

      <div className='h-[80%] ' style={{ backgroundImage: `url(${gridImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'  }}>

        <div className='text-white lg:text-5xl mx-auto justify-center text-center md:text-4xl sm:text-3xl text-2xl pt-2 shadow-2xl font-semibold  bg-transparent'><h1 className='heading bg-transparent'>PRIZES</h1></div>
        <div className='relative bg-transparent -left-[80px] sm:left-0 md:flex md:flex-row  flex-col justify-around mx-32  py-14'>

          <div className='bg-transparent mt-40 '>
            <div className='w-[290px] h-[290px] bg-[#861c7d]/70 border-2  border-pink-400 shadow-2xl shadow-white/60   opacity-60  my-4 backdrop-blur-md rounded-2xl'>
              <div className='inner relative my-6 border-2  border-pink-400 w-[240px] mx-auto h-[240px] bg-[#5F1559]/70 shadow-2xl shadow-white/60  backdrop-blur-md rounded-2xl'>
                <img className='relative mx-auto my-auto h-[100%] bg-transparent' src={second} alt="" />
              </div>

            </div>
            <div className='text-white bg-transparent'>
              <h3 className='bg-transparent' >2ND PRIZE</h3>
              <br />
              <h3 className='bg-transparent text-xl font-light'>₹5000</h3>
              <br />

              <h5 className='  max-w-[260px] bg-transparent'>
                Invitation to next Industry Visit by I&ECell.
                Styled Bottles and lots of goodies
                Certificate of achievement
              </h5>
            </div>
          </div>
          <div className='bg-transparent mt-40 '>
            <div className='w-[290px] h-[290px] bg-[#34225D]/50 border-2  border-pink-400 shadow-2xl shadow-white/70  opacity-60  my-4 backdrop-blur-md rounded-2xl'>
              <div className='inner relative my-6 border-2  border-pink-400 w-[240px] mx-auto h-[240px] bg-[#34225D]/70 shadow-2xl shadow-white/60  backdrop-blur-md rounded-2xl'>
                <img className='relative mx-auto my-auto bg-transparent' src={first} alt="" />
              </div>

            </div>
            <div className='text-white bg-transparent'>
              <h3 className='bg-transparent'>1ST PRIZE</h3>
              <br />
              <h3 className='bg-transparent text-xl font-light'>₹7000</h3>
              <br />

              <h5 className='  max-w-[260px] bg-transparent'>
                Invitation to next Industry Visit by I&ECell.
                Styled Bottles and lots of goodies
                Certificate of achievement
              </h5>
            </div>
          </div>
          <div className='bg-transparent mt-40 '>
            <div className='w-[290px] h-[290px]  border-2  border-pink-400 shadow-2xl shadow-white/60 bg-[#5F3172]/80 opacity-60  my-4 backdrop-blur-md rounded-2xl'>
              <div className='inner relative my-6 border-2  border-pink-400 w-[240px] mx-auto h-[240px] bg-[#5F3172]/80 shadow-2xl shadow-white/60  backdrop-blur-md rounded-2xl'>
                <img className='relative mx-auto my-auto bg-transparent' src={third} alt="" />
              </div>

            </div>
            <div className='text-white bg-transparent'>
              <h3 className='bg-transparent'>3RD PRIZE</h3>
              <br />
              <h3 className='bg-transparent text-xl font-light'>₹3000</h3>
              <br />

              <h5 className='  max-w-[260px] bg-transparent'>
                Invitation to next Industry Visit by I&ECell.
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