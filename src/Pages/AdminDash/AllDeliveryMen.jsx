import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { RiAdminFill, RiChatDeleteFill } from "react-icons/ri";
import { MdCloudDone } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
const AllDeliveryMen = () => {
    const axiosPublic = useAxiosPublic()
    const { isPending, error, data } = useQuery({
        queryKey: ['all-delivery-men'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-delivery-men',)
            return res.data
        }
    })
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">

            <div className="overflow-x-auto">
                <table className="min-w-full text-xs bg-white">

                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3">SL</th>
                            <th className="p-3">Booked User’s Name</th>
                            <th className="p-3"> Phone Number</th>
                            <th className="p-3">Number of parcel delivered </th>
                            <th className="p-3">Average review </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((singleData, index) => <tr singleData={singleData} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-3">
                                    <p>{index + 1}</p>
                                </td>
                                <td className="p-3">
                                    <p>{singleData?.name}</p>
                                </td>
                                <td className="p-3">
                                    <p>09876</p>
                                </td>
                                <td className="p-3">
                                    <p className="pl-10"> 7</p>
                                </td>

                                <td className="p-3">
                                    <p className="pl-10"> 4.5</p>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDeliveryMen;