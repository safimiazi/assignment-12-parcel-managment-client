import React, { useEffect, useState } from 'react';

const FeaturesCard = ({ singleData }) => {
    const { icon, title, description } = singleData;
    return (
        <div>
            <div className="card card-color text-white bg-base-100 rounded-e-3xl shadow-xl">
                <figure className="px-10 pt-10">
                    <img  src={icon} alt="Shoes" className="rounded-xl w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p> 
                </div>
            </div>
        </div>
    );
};

export default FeaturesCard;