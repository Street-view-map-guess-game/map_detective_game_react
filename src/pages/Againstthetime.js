import React,{useEffect,useState} from 'react'
import Map from '../components/MiniMap'
import StreetView from '../components/StreetView'
import { useDispatch,useSelector } from 'react-redux'
import { calculateTotalScore,increaseNumberOfRounds} from '../Redux/MapGameSlices/gameSlice'
import { restartCoordinate ,openCloseResultPage} from '../Redux/MapGameSlices/mapSlice'
import { startthegametime } from '../Redux/MapGameSlices/gameSlice'
import Maptime from '../components/MiniMapfortimemod'
import AgainstResultPage from './resultPages/AgainstthetimeresultPage'
import { setagaintimescore,againsttimeguess } from '../Redux/MapGameSlices/mapSlice'



export default function Againstthetime() {
  const dispatch = useDispatch()
      const [starting , setstarting] = useState(false)
      const isshow = useSelector((state) => state.gmSlc.gamestarttime);
      const guess = useSelector((state) => state.mapSlc.guess);
      const score = useSelector((state) => state.mapSlc.againsttimescore);
      const [timer,settimer] = useState(0)
      const [timer1,settimer1] = useState(5)
      const [timer2,settimer2] = useState(5)
      const [timer3,settimer3] = useState(100)
      const [round,setround] =useState(0)
      const [sonuc,setsonuc] =useState(0)
      const [showresult,setshowresult] =useState(true)
      
      
     
      useEffect(()=>{
  
        const  time =  setInterval(() => {
  
          if (timer1 > 1 ){
              ilksayac()
          }else{
              setstarting(true)
          }
          ucsayac()
          if(timer3 === 0){
            setshowresult(true)
            settimer2(5)
            dispatch(setagaintimescore(0))
            dispatch(againsttimeguess(0 ))
            setround(round + 1)
           
          }
          if(round === 5){
            setsonuc(1)
  
          }
         
          if(isshow === true){
          ikisayac()
  
                  if (timer2 === 0){
                    console.log('see you later')
                    dispatch(startthegametime())
                    setshowresult(false)
                    console.log(score,guess)
                    if(round === 5){
                      settimer3(-1)
                    }else{
                      settimer3(10)
                    }
                    
                  }
                  
          
          }
              addtime()
              
             },1000); 
          
   return () => clearInterval(time)
      })
  
      const addtime= () => {
        
        settimer(timer + 1)
          
  
      }
      const ilksayac = () => {
        
          settimer1(timer1 - 1)
            
    
        }
        const ikisayac = () => {
        
          settimer2(timer2 - 1)
            
    
        }
        const ucsayac = () => {
        
          settimer3(timer3 - 1)
            
    
        }
        
  
  
  
  
      return (
      <div>
          {starting ? (<>{showresult ? (<div>  <Maptime></Maptime>
          <StreetView countryName={"france"} />{isshow ? (<div className='flex items-center justify-center'><h1 className='absolute top-0 text-5xl mapStyle_counterVal__vw7ds' style={{height:"30px"}} >
            {timer2}</h1></div>):(<></>)} </div>):(<>
          
          
          
          <AgainstResultPage score={score}  guess={guess}  sonuc={sonuc} ></AgainstResultPage>
          
          
          
          
          
          </>)}</>):
          
          
          
          
          
          
          
          (<div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 min-h-screen flex justify-center items-center"><p className='  mapStyle_counterVal__vw7ds'  style={{fontSize:"15rem"}}>{timer1}</p></div>)}
        
      </div>
    )
  }
  