import React from 'react';

const TopDeliverySecCard = ({ singleData }) => {
    const {name,photo, totalParcelsDelivered,averageRating} = singleData;
    return (
        <div>
            <div className="max-w-xs card-color text-white rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="card-title">{name}</h2>
                        <p>total delivered: {totalParcelsDelivered}</p>
                        <p>average rating: {averageRating}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TopDeliverySecCard;