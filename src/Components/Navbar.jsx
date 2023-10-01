// ------------------------------component----------------------------------//

import React, { useState } from 'react';
import unnati from "../assets/unnatim.svg";
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState(true)

    const haldleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='mx-auto  bg-transparent shadow-lg fixed w-[100%] h-[70px] z-50'>

            <div className='bg-transparent my-auto h-[70px] flex text sticky z-50 justify-between px-8'>
                <img className='h-[30px] my-auto  bg-transparent ' src={unnati} alt="ait_logo" />
                <div className='hidden bg-white/[13%] brightness-75 border-[1px] border-white/40 text-white px-6 py-3 rounded-2xl md:flex my-auto lg:gap-14 md:gap-5  backdrop-blur-md'>
                    <a className='bg-transparent hover:-translate-y-1  md:text-sm  lg:text-[15px] duration-300 ' href="#home">Home</a>
                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300 ' href="#prize">Prizes</a>
                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300 ' href="#rule">Rules</a>


                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300' href="#faq">FAQ</a>

                    <a className='bg-transparent hover:-translate-y-1 md:text-sm lg:text-[15px] duration-300' href="https://www.aitecell.in/" target='_blank'>Visit I&E Cell</a>



                </div>
                <Link to='/end'>
                    <button className='bg-white/30  rounded-xl relative  h-10 w-32 my-3 text-white hidden md:block'>Register Now!</button>
                </Link>
                <div onClick={haldleNav} className='block md:hidden my-auto'>
                    {!nav ? <AiOutlineClose size={20} color='#906ED6' /> : <AiOutlineMenu size={20} color='#906ED6' />}

                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-[100%] border-r border-r-gray-900  backdrop-blur-md bg-white/20 ease-in-out duration-500' : 'fixed left-[-100%]'}>

                    {/* <img className='h-[25px] bg-transparent  my-8 mx-8' src={unnati} alt="ait_logo" /> */}
                    <div className=' gap-10 pt-20 bg-white/20 h-[100%] '>

                        <a className='p-4 text-white bg-transparent  px-5  border-gray-600 ' href="#home">Home<br /> <hr className='w-[90%]  rounded-xl my-2 mx-auto' /><br /></a>
                        <a className='p-4 text-white bg-transparent px-5  border-gray-600' href="#prize">Prizes<br /><hr className='w-[90%]  rounded-xl my-2  mx-auto' /><br /></a>
                        <a className='p-4 text-white  bg-transparent px-5 border-gray-600' href="#rule">Rules<br /><hr className='w-[90%]  rounded-xl my-2  mx-auto' /><br /></a>


                        <a className='p-4 text-white bg-transparent px-5  border-gray-600' href="#faq">FAQ<br /><hr className='w-[90%]  rounded-xl my-2  mx-auto' /><br /></a>

                        <a className='p-4 text-white  bg-transparent px-5 border-gray-600' href="https://www.aitecell.in/" target='_blank'>Visit I&E Cell<br /><hr className='w-[90%]  rounded-xl my-2 mx-auto' /><br /></a>
                        <Link to='/end'>
                        <div className='bg-transparent px-3'>
                            
                                <button className='bg-white/30 rounded-xl   h-10 w-32 my-auto text-white'>Register Now!</button>
                            
                        </div>
                        </Link>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar