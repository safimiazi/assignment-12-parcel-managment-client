import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {

    const axiosPublic = useAxiosPublic()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-all-users');
            return res.data;
        }
    })
    console.log(users)
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
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-400">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-400">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$15,792</p>
                                </td>
                                <td className="p-3 ">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span>Pending</span>
                                    </span>
                                </td>
                                <td className="p-3 ">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span>Pending</span>
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