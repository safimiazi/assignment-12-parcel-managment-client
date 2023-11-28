import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';



const CountUpCom = () => {
    const [ count, setCount] = useState(false)
    const axiosPublic = useAxiosPublic()

    const {isPending, refetch, error, data} = useQuery({
        queryKey:['delivery list'],
        queryFn: async()=>{
            const res = await axiosPublic('/statistics')
            return res.data
        }
    })



console.log("line 22", data);


    return (
        <div>
            <ScrollTrigger  onEnter={()=> setCount(true)} onExit={() => setCount(false)}>
                <div className="stats shadow-xl card-color text-white w-full px-20">

                    <div className="stat place-items-center p-14">
                        <div className="stat-title text-white"> Parcel Booked</div>
                        <div className="stat-value">{count && <CountUp start={0} end={data?.numberOfParcelBook} duration={1} delay={0}></CountUp>}</div>
                    </div>

                    <div className="stat place-items-center p-14">
                        <div className="stat-title text-white">Parcel Delivered</div>
                        <div className="stat-value text-amber-500">{count && <CountUp start={0} end={data?.numberOfDelivered} duration={1} delay={0}></CountUp>}</div>
                    </div>

                    <div className="stat place-items-center p-14">
                        <div className="stat-title text-white">Register users</div>
                        <div className="stat-value">{count && <CountUp start={0} end={data?.numberOfUser} duration={1} delay={0}></CountUp>}</div>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default CountUpCom;