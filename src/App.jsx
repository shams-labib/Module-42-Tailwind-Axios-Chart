
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
       <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
         <PricingOption pricingResult={pricingResult}></PricingOption>
       </Suspense>
    </main>
      
    </>
  )
}

export default App
