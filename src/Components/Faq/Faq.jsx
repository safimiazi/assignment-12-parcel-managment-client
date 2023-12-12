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
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 card-color text-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;