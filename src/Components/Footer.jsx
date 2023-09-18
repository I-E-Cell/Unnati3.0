import React from 'react'
import unnati from '../assets/unnatim.svg'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer bg-white/30 backdrop-blur-md w-[100%]  h-72'>
      <div className=' flex flex-row  justify-between bg-transparent w-[88%] h-[86%]   mx-auto'>
        <div className='bg-transparent justify-start mt-6'>
          <img className=' h-6 bg-transparent my-3 ' src={unnati} alt="" />
          <h2 className='bg-transparent text-sm'>Thrive in Choas, Lead the game</h2>


          <div className='flex gap-2  bg-transparent  px- my-12 '>
            <div className='w-[40px] h-[40px] bg-white/10 rounded-full'>
              <FaFacebook size={25} className='mx-auto bg-transparent my-[20%]' />
            </div>
            <div className='w-[40px] h-[40px] bg-white/10  rounded-full'>
              <FaInstagram size={25} className='mx-auto  bg-transparent my-[20%]' />
            </div>
            <div className='w-[40px] h-[40px] bg-white/10   rounded-full'>
              <FaTwitter size={25} className='mx-auto bg-transparent  my-[20%]' />
            </div>
            <div className='w-[40px] h-[40px] bg-white/10  rounded-full'>
              <FaLinkedinIn size={25} className='mx-auto bg-transparent  my-[20%]' />
            </div>
            <div className='w-[40px] h-[40px] bg-white/10  rounded-full'>
              <FaYoutube size={25} className='mx-auto bg-transparent  my-[20%]' />
            </div>
          </div>

        </div>
        <div className='bg-transparent justify-items-end relative  left-0 md:left-[200px] lg:left-[350px] mt-8 '>
          <div className=' bg-transparent  flex flex-col gap-2'>
            <h2 className='bg-transparent '>  Quick Links</h2>
            <a className='bg-transparent text-xs' href="">Home</a>
            <a className='bg-transparent text-xs' href="">Rules</a>
            <a className='bg-transparent text-xs' href="">Prizes</a>
            <a className='bg-transparent text-xs' href="">FAQ</a>
            <a className='bg-transparent text-xs' href="">Visit I&ECell</a>

          </div>
        </div>
        <div>

        </div>
      </div>


    </div>
  )
}

export default Footer