import React from 'react'
import circle from '../assets/home_circle.svg'
import u from '../assets/uu.svg'
import n1 from '../assets/nn1.svg'
import n2 from '../assets/nn2.svg'
import a from '../assets/aa.svg'
import t from '../assets/tt.svg'
import i from '../assets/ii.svg'
import three from '../assets/33.svg'
import zero from '../assets/00.svg'
import dot from '../assets/dot.svg'
import ellipse from '../assets/ellipse.svg'
import orange from '../assets/orange(3).svg'





const Home = () => {
    
    return (
        <div>
            <div className='absolute z-10 my-[-55px]'>
                <img src={circle} alt="" /> 

            </div>
            {/* <div className='relative top-[110px] rounded-2xl justify-center text-center items-center  mx-auto bg-white/20 backdrop-blur-md  w-[86%] h-[34em] sm:h-[36em]'> */}
                <div className='pt-20 z-0'>
                <div className='relative flex bg-transparent justify-center py-[220px]  md:py-[210px]   gap-2 sm:gap-5'>
                    <img className='relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] glow' src={u} alt="" />
                    <img className='relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] glow' src={n1} alt="" />
                    <img className='relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] glow' src={n2} alt="" />
                    <img className='relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] glow' src={a} alt="" />
                    <img className='relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] glow' src={t} alt="" />
                    <img className='relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] glow' src={i} alt="" />
                    <img className='relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] ml-6 glow' src={three} alt="" />
                    <img className='relative justify-end bg-transparent h-[20px] mt-9 md:mt-[100px] sm:h-[25px] lg:h-[40px] md:h-[35px] my-auto shadow-[#12E7D3] glow' src={dot} alt="" />

                    <img className='relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] glow' src={zero} alt="" />


                </div>
                </div>
                {/* <div className='absolute -z-20 top-[-43em] w-[100em] left-[-41em] bg-transparent '>
                    <img className=' bg-transparent' src={ellipse} alt="" />
                </div>
                <div className='absolute top-[5em] -z-10 w-[20em] left-[3.5em]  bg-transparent '>
                    <img className=' bg-transparent' src={orange} alt="" />
                </div> */}
            {/* </div> */}


        </div>
    )
}

export default Home