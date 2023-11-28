import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';

const MyReviews = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/get-my-review/${user?.email}`)
            return res.data
        }
    })

    
    return (
        <div>
            <div>
                <h1 className="text-4xl">My Reviews </h1>
            </div>
            <div className='grid md:grid-cols-3 gap-8 grid-cols-1 mt-5'>
                {
                    data?.map(singleData => <div singleData={singleData} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={singleData?.photo} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title"> Review giver’s name: {singleData?.name}</h2>
                      <p> Review Giving Date: {singleData?.ReviewGivingDate}</p>
                      <p> Rating: {singleData?.rating}</p>
                      <p> feedback: {singleData?.feedback}</p>
                     
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default MyReviews;