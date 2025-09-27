import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
// Example Navbar Data
const navbar1 = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
];



const Navber = () => {
  // so ekhane ekta bisoy ache, jeta amar mathay thake na and ami eta vul kori seta holo, ekta truthy value suppose "open" er samne jdi "!open" evabe di, tahole man ta toggle korbe, mane true thakle false korbe abar false thakle man ta true korbe, so eta ekta havvy jinish ei jinish ta mathay rakha dorkar ache

  const [open, setOpen] = useState(false)

  const links =  navbar1.map(route => <Link key={route.id} route={route}></Link>)


    return (
         <nav className='flex justify-between mx-10 mt-5'>
            <span className='flex' onClick={()=> setOpen(!open)}>  
              {open?<X className='md:hidden'></X>:<Menu className='md:hidden'></Menu>}

              <ul className={`md:hidden absolute duration-500 ${open?'top-8':"-top-40"} bg-white text-black p-3 `}>
                {links}
              </ul>
              
            <h1 className='mr-3'>My Navber</h1>
            </span>

              <ul className='md:flex hidden'>
      {
       links
      }
</ul>

 <button className='btn'>Sign Up</button>
            
     </nav>
    );
};

export default Navber;