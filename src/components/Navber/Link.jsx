import React from 'react';

const Link = ({route}) => {
    return (
    
               
              <li className=' hover:bg-amber-500 md:mr-10 px-3'><a href={route.path}>{route.name}</a></li>
  
        
    );
};

export default Link;