import React from 'react';
import Feature from './Feature';

const PricingCard = ({price}) => {
    return (
        <div className='border-1 bg-blue-500 p-10 rounded-2xl space-y-4 flex flex-col'>
            {/* header */}

            <div className='space-y-2'>
                <h1 className="text-5xl">{price.name}</h1>
                <h4 className="text-3xl">${price.price}</h4>
            </div>

            {/* Card Body */}

            <div className='bg-blue-300 p-4 rounded-lg flex-1'>
              <p>{price.description}</p>

              <div className='mt-2 '>
                {
                price.features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
              }
              </div>
            </div>

             <button className="btn  w-full mt-1">Subscribe</button>
        </div>
    );
};

export default PricingCard;