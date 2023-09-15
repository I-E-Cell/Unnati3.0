import React, { useRef } from 'react'
import { animate, motion } from "framer-motion";


const Counter = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);
    const prizeCount = useRef(null);
    const winnerCount = useRef(null);





    const animationClientsCount = () => {
        animate(0, 16, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
        });
    }
    const animationWinnerCount = () => {
        animate(0, 3, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
        });
    }

    const animationProjectCount = () => {
        animate(0, 500, {
            duration: 2,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        });
    }
    const animationPrizeCount = () => {
        animate(0, 20000, {
            duration: 2,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        });
    }



    return (
        <div className='text-white pt-[250px] gap-4  flex md:flex-row flex-col justify-evenly'>

            <div className='rounded-xl border-spacing-2 mx-auto border-2 border-white/40 w-[150px] h-[100px] bg-white/30 justify-center text-center '>
                <div className='relative top-7 bg-transparent top'>
                    +<motion.span className='relative    bg-transparent  text-3xl' ref={projectCount} whileInView={animationProjectCount}>500</motion.span>
                </div>
                <div className='relative text-sm mx-auto bg-transparent top-7 text-centre'>
                    <h3 className='text-sm  font-thin bg-transparent top-6'>Teams Registered</h3>
                </div>
            </div>
            <div className='rounded-xl w-[150px] mx-auto border-spacing-2 border-2 border-white/40 h-[100px] bg-white/30 justify-center text-center '>
                <div className='relative top-7 bg-transparent top'>
                    +<motion.span className='relative   bg-transparent  text-3xl' ref={clientCount} whileInView={animationClientsCount}>16</motion.span>
                </div>
                <div className='relative text-sm mx-auto bg-transparent top-7 text-centre'>
                    <h3 className='text-sm  font-thin bg-transparent top-6'>Teams Registered</h3>
                </div>
            </div> 
            <div className='rounded-xl w-[150px] mx-auto border-spacing-2 border-2 border-white/40 h-[100px] bg-white/30 justify-center text-center '>
                <div className='relative top-7 bg-transparent top'>
                    +<motion.span className='relative   bg-transparent  text-3xl' ref={winnerCount} whileInView={animationWinnerCount}>3</motion.span>
                </div>
                <div className='relative text-sm  bg-transparent top-7 text-centre'>
                    <h3 className='text-sm  font-thin bg-transparent top-6'>Teams Registered</h3>
                </div>
            </div>

            <div className='rounded-xl w-[150px] mx-auto border-spacing-2 border-2 border-white/40 h-[100px] bg-white/30 justify-center text-center '>
                <div className='relative top-7 bg-transparent top'>
                    +<motion.span className='relative   bg-transparent  text-3xl' ref={prizeCount} whileInView={animationPrizeCount}>20000</motion.span>
                </div>
                <div className='relative text-sm bg-transparent top-7 text-centre'>
                    <h3 className='text-sm  font-thin bg-transparent top-6'>Teams Registered</h3>
                </div>
            </div>
            

        </div>
    )
}

export default Counter