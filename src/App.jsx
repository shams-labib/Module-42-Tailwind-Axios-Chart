
import { Suspense } from 'react'
import './App.css'
import Navber from './components/Navber/Navber'
import PricingOption from './components/Pricing/PricingOption'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksData from './components/MarksData/MarksData'


const pricingPromise = async ()=>{
  const result = await fetch('/pricing.json')
  return result.json();
}

// ekhane amra axios use kore data fetch kora shikbo, eta beshi kisu na data fetch sohoj korte eta use hosce, baki sob normal react

const marksData = axios.get('/marksData.json')

const pricingResult = pricingPromise();


function App() {


  return (
    <>
      
   <header>
     <Navber></Navber>
   </header>

    <main>
       <Suspense fallback={<div className='flex justify-center items-center mt-[300px]'>
        <span className="loading loading-dots loading-xl text-center"></span>
       </div>}>
         <PricingOption pricingResult={pricingResult}></PricingOption>
       </Suspense>

       <Suspense fallback={<div className='flex justify-center items-center mt-[300px]'>
        <span className="loading loading-dots loading-xl text-center"></span>
       </div>}><MarksData marksData={marksData}></MarksData></Suspense>

     <ResultChart></ResultChart>

    </main>
      
    </>
  )
}

export default App
