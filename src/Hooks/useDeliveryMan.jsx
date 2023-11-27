import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usedDeliveryMan = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: isDeliveryMan} = useQuery({
        queryKey: [user?.email, 'isDeliveryMan'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/delivery-man/${user.email}`)
            console.log(res.data);
            return res.data?.deliveryMan
        }
       })
       return [isDeliveryMan]
};

export default usedDeliveryMan;