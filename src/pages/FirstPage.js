import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import Loadingpage from './LoadingPage';
import { useEffect, useState } from 'react';
import yazilogo from "../assets/images/pageImage/mapdetectiveyazilogo-beyaz.png"
import whereami from "../assets/images/pageImage/neredymyazili2.png"
import { useMediaQuery } from 'react-responsive'
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';



export default function FirstPage() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const [time, settime] = useState(false)
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 600px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const { user } = UserAuth();
    useEffect(() => {
        setTimeout(() => {
            settime(true)

        }, 1000);

    }, [])

    return (
        !time ? (<Loadingpage></Loadingpage>) : (
            // <div>
            //     {/* connect to account */}


            //     <Link
            //           to={{
            //             pathname: '/connectaccount',
            //           }}>
            //           <button className="">
            //            connect to account
            //           </button>
            //         </Link>

            // </div>
            user ? (<Navigate to='/countryselection' />) : (
                <>

                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                color: {
                                    value: "#000000",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 250,
                                        duration: 0.8,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 3,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                    <div className="relative  min-h-screen flex justify-center items-center ">
                        {/* connect to account */}
                        {isDesktopOrLaptop && <div >
                            <img className='absolute top-5 left-5 opacity-80' width="300" src={yazilogo} alt="logo"></img>
                        </div>}

                        {isDesktopOrLaptop && <div className='absolute top-10 right-5'>


                            <Link
                                to={{
                                    pathname: '/connectaccount',
                                }}>
                                <button className="opacity-90  relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-yellow-300 border-2 border-yellow-300 rounded-full hover:text-black group hover:bg-gray-50">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative">connect to account</span>
                                </button>
                            </Link></div>}
                        {isTabletOrMobile && <div className='absolute top-10 '>


                            <Link
                                to={{
                                    pathname: '/connectaccount',
                                }}>
                                <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-yellow-300 border-2 border-yellow-300 rounded-full hover:text-black group hover:bg-gray-50">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative">connect to account</span>
                                </button>
                            </Link></div>}



                        <div style={{ marginTop: "7rem" }}>
                            <div>
                                <img width="1300px" src={whereami} alt="none">
                                </img>
                            </div>
                            <div style={{ marginTop: '40px', marginRight: '20px', marginLeft: '20px' }}>
                                <h1 className='text-white  italic font-semibold  text-center'>If you know the answer of this question , start playing now</h1></div>
                            <div className='flex justify-center items-center' style={{ marginTop: '40px' }}>
                                <Link
                                    to={{
                                        pathname: '/connectaccount',
                                    }}>
                                    <button className="opacity-90 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-green-400 border-2 border-green-400 rounded-full hover:text-black group hover:bg-gray-50">
                                        <span className="absolute left-0 block w-full h-0 transition-all bg-green-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                            <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="relative">lets try the game</span>
                                    </button>
                                </Link></div></div>

                    </div>
                </>)
        )

    )
}
{/* <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative">Button Text</span>
</a> */}