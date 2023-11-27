import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/get-all-users');
            return res.data;
        }
    })
    console.log(users)



    const handleDeliveryMan = id => {
        axiosSecure.patch(`/make-delivery-man/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount){
                refetch()
                toast.success("successfully create delivery man")
            }
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleAdmin = id => {
        console.log(id);
        axiosSecure.patch(`/make-admin/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount){
                refetch()
                toast.success("successfully create Admin")
            }
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold ">All Users</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs bg-white">
                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">#</th>
                                <th className="p-3">User Name</th>
                                <th className="p-3">Phone Number</th>
                                <th className="p-3">Parcel Booked</th>
                                <th className="p-3 text-right"> Total Amount</th>
                                <th className="p-3">Make Delivery Man</th>
                                <th className="p-3">Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr user={user} key={i} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>{i + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{user?.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{user?.phone}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{user?.book}</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <p>$15,792</p>
                                    </td>
                                    <td className="p-3 ">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span className="font-bold text-red-700">
                                                {
                                                    user.role == "deliveryMan" ? <button disabled className="bg-gray-300 text-black  px-3 py-1">Make Delivery Man</button> : <button onClick={()=>handleDeliveryMan(`${user._id}`)} className="bg-lime-500  px-3 py-1">Make Delivery Man</button>
                                                }
                                            </span>
                                        </span>
                                    </td>
                                    <td className="p-3 ">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span className="font-bold text-red-700">
                                                {
                                                    user.role == "admin" ? <button disabled className="bg-gray-300 text-black  px-3 py-1">Make Admin</button> : <button onClick={()=>handleAdmin(`${user._id}`)} className="btn-color px-3 py-1">Make Admin</button>

                                                }
                                            </span>
                                        </span>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;