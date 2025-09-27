
import { Suspense } from 'react'
import './App.css'
import Navber from './components/Navber/Navber'
import PricingOption from './components/Pricing/PricingOption'


const pricingPromise = async ()=>{
  const result = await fetch('./pricing.json')
  return result.json();
}


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
    </main>
      
    </>
  )
}

export default App
