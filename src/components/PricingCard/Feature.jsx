import { Check, CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div >
            <p className='flex gap-2 my-1'><CircleCheckBig color='#00ff9d'></CircleCheckBig>{feature}</p>
        </div>
    );
};

export default Feature;