import React, { useRef } from 'react'
import { animate, motion } from "framer-motion";


const Counter = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);
    const prizeCount = useRef(null);
    const winnerCount = useRef(null);



    const animationClientsCount = () => {
        const animation = animate(clientCount.current, 108, {
          duration: 1,
          onUpdate: (v) => {
            clientCount.current.textContent = v.toFixed();
            if (v >= 16) {
              animation.stop();
            }
          },
        });
      };
    
      const animationWinnerCount = () => {
        const animation = animate(winnerCount.current, 304, {
          duration: 1,
          onUpdate: (v) => {
            winnerCount.current.textContent = v.toFixed();
            if (v >= 3) {
              animation.stop();
            }
          },
        });
      };
    
      const animationProjectCount = () => {
        const animation = animate(projectCount.current, 16, {
          duration: 2,
          onUpdate: (v) => {
            projectCount.current.textContent = v.toFixed();
            if (v >= 500) {
              animation.stop();
            }
          },
        });
      };
    
      const animationPrizeCount = () => {
        const animation = animate(prizeCount.current, 35000, {
          duration: 2,
          onUpdate: (v) => {
            prizeCount.current.textContent = v.toFixed();
            if (v >= 20000) {
              animation.stop();
            }
          },
        });
      };


    return (
        <div className='relative  text-white left-[-140px] md:left-[0px] mx-64 pt-[30px] gap-4  flex md:flex-row flex-col justify-evenly'>

            <div className='rounded-xl w-[150px] mx-auto  h-[100px]  justify-center text-center '>
                <div className='relative top-7 bg-transparent top'>
                    +<motion.span className='relative   bg-transparent  text-3xl' ref={clientCount} whileInView={animationClientsCount}>16</motion.span>
                </div>
                <div className='relative text-sm mx-auto bg-transparent top-7 text-centre'>
                    <h3 className='text-lg  font-thin bg-transparent top-6'>Teams Registered</h3>
                </div>
            </div> 
            <div className='rounded-xl w-[150px] mx-auto  h-[100px] justify-center text-center '>
                <div className='relative top-7 bg-transparent top'>
                    +<motion.span className='relative   bg-transparent  text-3xl' ref={winnerCount} whileInView={animationWinnerCount}>3</motion.span>
                </div>
                <div className='relative text-sm  bg-transparent top-7 text-centre'>
                    <h3 className='text-lg font-thin bg-transparent top-6'>Participants</h3>
                </div>
            </div>
            <div className='rounded-xl  mx-auto  w-[150px] h-[100px]  justify-center text-center '>
                <div className='relative top-7 bg-transparent top'>
                    +<motion.span className='relative    bg-transparent  text-3xl' ref={projectCount} whileInView={animationProjectCount}>0</motion.span>
                </div>
                <div className='relative text-sm mx-auto bg-transparent top-7 text-centre'>
                    <h3 className='text-lg  font-thin bg-transparent top-6'>Finalists</h3>
                </div>
            </div>

            <div className='rounded-xl w-[150px] mx-auto  h-[100px]  justify-center text-center '>
                <div className='relative top-7 bg-transparent top'>
                    +<motion.span className='relative   bg-transparent  text-3xl' ref={prizeCount} whileInView={animationPrizeCount}>20000</motion.span>
                </div>
                <div className='relative text-sm bg-transparent top-7 text-centre'>
                    <h3 className=' text-lg  font-thin bg-transparent top-6'>Prize Pool</h3>
                </div>
            </div>
            

        </div>
    )
}

export default Counter