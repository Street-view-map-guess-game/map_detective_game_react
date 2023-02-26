import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { Navigate ,Link} from 'react-router-dom';
import Loadingpage from './LoadingPage';
import { useEffect,useState } from 'react';


export default function FirstPage() {
    const[time,settime]=useState(false)
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
    user ?  (<Navigate to='/countryselection' />):( <div>
        {/* connect to account */}

        
        <Link
              to={{
                pathname: '/connectaccount',
              }}>
              <button className="">
               connect to account
              </button>
            </Link>
      
    </div>)
    )
    
  )
}
