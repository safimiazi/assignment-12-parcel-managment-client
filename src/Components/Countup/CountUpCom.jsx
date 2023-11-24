import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CountUpCom = () => {
    const [ count, setCount] = useState(false)
    return (
        <div>
            <ScrollTrigger  onEnter={()=> setCount(true)} onExit={() => setCount(false)}>
                <div className="stats shadow-xl card-color text-white w-full px-20">

                    <div className="stat place-items-center p-14">
                        <div className="stat-title text-white"> Parcel Booked</div>
                        <div className="stat-value">{count && <CountUp start={0} end={200} duration={1} delay={0}></CountUp>}</div>
                    </div>

                    <div className="stat place-items-center p-14">
                        <div className="stat-title text-white">Parcel Delivered</div>
                        <div className="stat-value text-amber-500">{count && <CountUp start={0} end={200} duration={0} delay={1}></CountUp>}</div>
                    </div>

                    <div className="stat place-items-center p-14">
                        <div className="stat-title text-white">Register users</div>
                        <div className="stat-value">{count && <CountUp start={0} end={200} duration={1} delay={0}></CountUp>}</div>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default CountUpCom;