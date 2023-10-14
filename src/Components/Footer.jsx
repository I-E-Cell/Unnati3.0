// ------------------------------component----------------------------------//

import React from 'react'
import unnati from '../assets/unnatim.svg'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer bg-white/[13%] border-[1px]  border-white/40 rounded-2xl brightness-75 backdrop-blur-lg w-[100%]  h-72'>
      <div className=' flex flex-row  justify-between bg-transparent w-[95%] h-[86%]   mx-auto'>
        <div className='bg-transparent justify-start mt-6'>
          <img className=' h-6 bg-transparent my-3 ' src={unnati} alt="" />
          {/* <h2 className='bg-transparent text-sm'>Thrive in Choas, Lead the game</h2> */}


          <div className='flex gap-2  bg-transparent  py-4 my-12 '>
            <a href='https://www.facebook.com/ecellait/' className='w-[40px] h-[40px] bg-white/40 rounded-full' target='_blank'>
              <FaFacebook size={25} className='mx-auto bg-transparent my-[20%]' /> 
            </a>
            
            <a href='https://www.instagram.com/ecell_ait/' className='w-[40px] h-[40px] bg-white/40  rounded-full' target='_blank'>
              <FaInstagram size={25} className='mx-auto  bg-transparent my-[20%]' />
            </a>
            <a href='https://twitter.com/ecell_aitpune' className='w-[40px] h-[40px] bg-white/40   rounded-full' target='_blank'>
              <FaTwitter size={25} className='mx-auto bg-transparent  my-[20%]' />
            </a>
            <a href='https://www.linkedin.com/company/innovation-entrepreneurship-cell/mycompany/verification/' className='w-[40px] h-[40px] bg-white/40  rounded-full' target='_blank'>
              <FaLinkedinIn size={25} className='mx-auto bg-transparent  my-[20%]' />
            </a>
            <a href='https://www.youtube.com/channel/UCDtJi5nCEwzO06fPv0b82nQ' className='w-[40px] h-[40px] bg-white/40  rounded-full' target='_blank'>
              <FaYoutube size={25} className='mx-auto bg-transparent  my-[20%]' />
            </a>
          </div>

        </div>
        <div className=' lg:text-5xl  md:text-3xl  hidden md:block pt-7 text-center bg-transparent'>
          <h1 className='bg-transparent   font-semibold heading text-white/70 py-3'>THRIVE IN CHOAS,  </h1>
          <h1 className='bg-transparent  font-semibold heading text-white/70'>LEAD THE GAME.</h1>
        </div>
        <div className='bg-transparent font-light justify-items-end relative text-white left-0 md:left-[90px] lg:left-[140px] mt-8 '>
          <div className=' bg-transparent left-4 sm:left-0  flex flex-col gap-2'>
            <h2 className='bg-transparent text-lg'>  Quick Links</h2>
           
            <a className='bg-transparent text-sm sm:text-md' href="">Home</a>
            <a className='bg-transparent text-sm sm:text-md' href="">Rules</a>
            <a className='bg-transparent text-sm sm:text-md' href="">Prizes</a>
            <a className='bg-transparent text-sm sm:text-md' href="">FAQ</a>
            <a className='bg-transparent text-sm sm:text-md' href="">Visit I&ECell</a>

          </div>
        </div>
        <div>

        </div>
      </div>


    </div>
  )
}

export default Footer