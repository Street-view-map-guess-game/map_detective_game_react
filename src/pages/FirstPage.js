import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { Navigate ,Link} from 'react-router-dom';
import Loadingpage from './LoadingPage';
import { useEffect,useState } from 'react';
import yazilogo from "../assets/images/pageImage/mapdetectiveyazilogo.png"
import whereami from "../assets/images/pageImage/neredymyazili2.png"
import { useMediaQuery } from 'react-responsive'



export default function FirstPage() {
    const[time,settime]=useState(false)
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 600px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const { user } = UserAuth();
    useEffect(()=>{setTimeout(() => {
       settime(true)
        
    }, 1000);

    },[])
    
  return (
    !time ? (<Loadingpage></Loadingpage>):(
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
    user ?  (<Navigate to='/countryselection' />):( 
    <div className="relative bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 min-h-screen flex justify-center items-center ">
        {/* connect to account */}
       { isDesktopOrLaptop &&  <div >
<img className='absolute top-5 left-5 opacity-70'  width="200" src={yazilogo} alt="logo"></img>
</div>  } 

{ isDesktopOrLaptop &&  <div className='absolute top-10 right-5'>
        
      
        <Link
              to={{
                pathname: '/connectaccount',
              }}>
              <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-yellow-300 border-2 border-yellow-300 rounded-full hover:text-black group hover:bg-gray-50">
              <span class="absolute left-0 block w-full h-0 transition-all bg-yellow-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">connect to account</span>
              </button>
            </Link></div> } 
            { isTabletOrMobile &&  <div className='absolute top-10 '>
        
      
        <Link
              to={{
                pathname: '/connectaccount',
              }}>
              <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-yellow-300 border-2 border-yellow-300 rounded-full hover:text-black group hover:bg-gray-50">
              <span class="absolute left-0 block w-full h-0 transition-all bg-yellow-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">connect to account</span>
              </button>
            </Link></div>  } 


    
            <div style={{marginTop:"7rem"}}>
            <div>
            <img width="1300px" src={whereami} alt="none">
            </img>
            </div>
            <div style={{marginTop:'40px', marginRight:'20px' ,marginLeft:'20px'}}>
            <h1 className='text-white  italic font-semibold  text-center'>If you know the answer to this question, start playing now</h1></div>
            <div className='flex justify-center items-center'  style={{marginTop:'40px'}}>
            <Link
              to={{
                pathname: '/connectaccount',
              }}>
              <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-green-400 border-2 border-green-400 rounded-full hover:text-black group hover:bg-gray-50">
              <span class="absolute left-0 block w-full h-0 transition-all bg-green-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">lets try the game</span>
              </button>
            </Link></div></div>
      
    </div>)
    )
    
  )
}
{/* <a href="#_" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">Button Text</span>
</a> */}