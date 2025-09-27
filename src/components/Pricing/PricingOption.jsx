import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({pricingResult}) => {
    const PricingData = use(pricingResult);

    return (
        <div className='container mx-auto ] '>
            <h2 className='text-5xl mt-[60px]'>Get Our Membership</h2>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mt-10'>
                {
                    PricingData.map(price => <PricingCard key={price.id} price = {price}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;