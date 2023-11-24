import React from 'react';
import Lottie from 'lottie-react';
import parcel from "../../assets/Animation - 1700801183967.json"
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen card-color">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Lottie animationData={parcel}></Lottie>
                    <div>
                        <h1 className="text-5xl text-color font-bold">Effortless Parcel Management Solutions</h1>
                        <p className="py-6 text-color">Revolutionize parcel management with our user-friendly system. Track, secure, and simplify deliveries effortlessly. Elevate your logistics experience with us.</p>
                        <button className="btn btn-color text-color">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;