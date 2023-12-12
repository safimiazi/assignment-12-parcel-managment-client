import React from 'react';

const Faq = () => {
    return (
        <div className=''>
            <div className="collapse collapse-arrow bg-base-200 card-color text-white">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                what is parcel management?


                </div>
                <div className="collapse-content">
                    <p>Parcel management is the systematic handling and tracking of packages throughout the shipping process. It involves efficient sorting, secure storage, real-time tracking, and effective communication to ensure timely and accurate delivery, contributing to a seamless supply chain and heightened customer satisfaction.





                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 card-color text-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How can I track the current location of my parcel in the delivery process?                </div>
                <div className="collapse-content">
                    <p>To track your parcel, use the provided tracking number on our website. This number is unique to your shipment and allows you to monitor the real-time status, including sorting, transit, and estimated delivery time.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-32 card-color text-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                What security measures are in place to protect parcels during transportation and storage?
                </div>
                <div className="collapse-content">
                    <p>We prioritize the security of your parcels. Our facilities employ surveillance systems, secure storage protocols, and tamper-evident packaging to safeguard shipments. Additionally, our tracking system enhances transparency, allowing you to monitor the journey of your parcel until it reaches its destination.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;