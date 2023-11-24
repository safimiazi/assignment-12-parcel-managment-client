import React, { useEffect, useState } from 'react';
import ShareTitle from '../../Share/ShareTitle/ShareTitle';
import FeaturesCard from './FeaturesCard';

const Features = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/public/features.json')
          .then((res) => res.json())
          .then((data) => setData(data))
      }, []);
    
    
    return (
        <div className='space-y-4'>
            <ShareTitle title={"Enhanced Delivery Experience"}
            des={"Elevate your delivery experience with our exceptional features. From prioritizing parcel safety to lightning-fast deliveries and global reach, our services redefine convenience and reliability."}
            ></ShareTitle>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
               {
                data.map(singleData => <FeaturesCard singleData={singleData}></FeaturesCard>)
               }
            </div>
        </div>
    );
};

export default Features;