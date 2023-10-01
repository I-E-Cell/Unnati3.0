// ------------------------------component----------------------------------//

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import circle from '../assets/home_circle.svg';
import u from '../assets/uu.svg';
import n1 from '../assets/nn1.svg';
import n2 from '../assets/nn2.svg';
import a from '../assets/aa.svg';
import t from '../assets/tt.svg';
import i from '../assets/ii.svg';
import three from '../assets/33.svg';
import zero from '../assets/00.svg';
import dot from '../assets/dot.svg';
import '../index.css';

const Home = () => {
    const [glowingIndex, setGlowingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlowingIndex((prevIndex) => (prevIndex + 1) % 10);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className='absolute z-10 md:my-[-55px]'>
                <img src={circle} alt='' />
            </div>
            <div className='pt-20 z-0'>
                <div className='flex flex-col'>
                    <div className='relative flex bg-transparent justify-center py-[220px] md:py-[210px] gap-2 sm:gap-5'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col md:flex-row'>
                                <div className='flex gap-4'>
                                    <img
                                        className={`relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] ${glowingIndex === 0 ? 'glow' : ''
                                            }`}
                                        src={u}
                                        alt=''
                                    />
                                    <img
                                        className={`relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] ${glowingIndex === 1 ? 'glow' : ''
                                            }`}
                                        src={n1}
                                        alt=''
                                    />
                                    <img
                                        className={`relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] ${glowingIndex === 2 ? 'glow' : ''
                                            }`}
                                        src={n2}
                                        alt=''
                                    />
                                    <img
                                        className={`relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] ${glowingIndex === 3 ? 'glow' : ''
                                            }`}
                                        src={a}
                                        alt=''
                                    />
                                    <img
                                        className={`relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] ${glowingIndex === 4 ? 'glow' : ''
                                            }`}
                                        src={t}
                                        alt=''
                                    />
                                    <img
                                        className={`relative bg-transparent  mr-10 h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] ${glowingIndex === 5 ? 'glow' : ''
                                            }`}
                                        src={i}
                                        alt=''
                                    />

                                </div>
                                <div className='flex gap-4 sm:mt-9 md:mt-0 relative top-4 md:top-0 mx-auto'>
                                    <img
                                        className={`relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3]  ${glowingIndex === 6 ? 'glow' : ''
                                            }`}
                                        src={three}
                                        alt=''
                                    />
                                    <img
                                        className={`relative justify-end bg-transparent h-[20px] mt-9 md:mt-[100px] sm:h-[25px] lg:h-[40px] md:h-[35px] my-auto shadow-[#12E7D3] ${glowingIndex === 7 ? 'glow' : ''
                                            }`}
                                        src={dot}
                                        alt=''
                                    />
                                    <img
                                        className={`relative bg-transparent h-[56px] sm:h-[80px] lg:h-[150px] md:h-[110px] my-auto shadow-[#12E7D3] ${glowingIndex === 8 ? 'glow' : ''
                                            }`}
                                        src={zero}
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className='text-center py-8  font-extralight text-[18px] text-white'>
                            <h1 className='py-[1px]  '>Thrive in Chaos, Lead the Game</h1>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <div className='flex flex-col md:flex-row my-9 mx-16 md:mx-0 sm:gap-5 md:justify-center relative top-[-140px]'>
                    <Link to='/end'>
                        <button className='bg-white/30 border-white/30 border-[1.5px]   rounded-xl h-12 mx-auto md:mx-0 mb-4 w-64 my-auto text-white  '>
                            Register Now!
                        </button>
                    </Link>
                    <a target='_blank' href="https://drive.google.com/file/d/1DX2MrxH-_tqpSer4QMBP43bcXJ78R52G/view?usp=drivesdk"><button className='bg-white/30  border-[1.5px] border-white/30 rounded-xl h-12 mx-auto md:mx-0  w-64 my-auto text-white '>Download Rulebook</button></a>
                </div>
            </div>
        </div>
    );
};

export default Home;