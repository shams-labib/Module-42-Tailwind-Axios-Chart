import React from 'react';
import Link from './Link';
// Example Navbar Data
const navbar1 = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
];



const Navber = () => {
    return (
         <nav>

<ul className='flex'>
    
      {
        navbar1.map(route => <Link route={route}></Link>)
      }
</ul>

            
      {/* <ul className='flex'>

     {
      navbar1.map(route => 
        <li className='text-white mr-4'><a href={route.path}>{route.name}</a></li>
       )
     }
  

      </ul> */}
     </nav>
    );
};

export default Navber;