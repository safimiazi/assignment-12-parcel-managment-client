import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationPinLock } from "react-icons/fa6";
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyDeliveryList = () => {
const axiosSecure = useAxiosSecure()
const {user} = useAuth()
const {isPending, refetch, error, data} = useQuery({
    queryKey:['delivery list'],
    queryFn: async()=>{
        const res = await axiosSecure(`/get-delivery-list/${user?.email}`)
        return res.data
    }
})


const handleCancel = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You went to cancel the parcel",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.patch(`/cancel-status/${id}`)
            .then(res => {
                console.log(res.data);
                if(res.data.modifiedCount){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "successfully deleted.",
                        icon: "success"
                      });
                }
            })
            .catch(error => {
                console.log(error.message);
            })

       
        }
      });



}


const handleDeliver = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You want to delivered the parcel",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, deliver it!"
      }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.patch(`/deliver-status/${id}`)
            .then(res => {
                console.log(res.data);
                if(res.data.modifiedCount){
                    refetch()
                    Swal.fire({
                        title: "delivered!",
                        text: "delivered successfully.",
                        icon: "success"
                      });
                }
            })
            .catch(error => {
                console.log(error.message);
            })
           



       
        }
      });


}
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold">My Delivery List</h2>
       
        <div className="overflow-x-auto">
            <table className="min-w-full text-xs bg-white">
                <thead className="dark:bg-gray-700">
                    <tr className="text-left font-bold">
                        <th className="p-3"> #</th>
                        <th className="p-3"> Booked User’s Name</th>
                        <th className="p-3"> Receivers Name</th>
                        <th className="p-3"> Booked User’s Phone</th>
                        <th className="p-3">Requested Delivery Date</th>
                        <th className="p-3">Approximate Delivery Date</th>
                        <th className="p-3">Recievers phone number</th>
                        <th className="p-3"> Receivers Address</th>
                        <th className="p-3">View Location</th>
                        <th className="p-3">Cancel</th>
                        <th className="p-3">Deliver</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((singleData, index) => <tr singleData={singleData} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>{index + 1}</p>
                            </td>
                            <td className="p-3">
                                <p>{singleData.name}</p>
                            </td>
                            <td className="p-3">
                                <p>{singleData.receiverName}</p>
                            </td>
                            <td className="p-3">
                                <p>{singleData.phone}</p>
                            </td>
                            <td className="p-3 ">
                                <p>{singleData.deliveryDate}</p>
                            </td>
                            <td className="p-3 ">
                                <p>{singleData?.approxDeliveryDate}</p>
                            </td>
                            <td className="p-3 ">
                                <p>{singleData?.receiverMobileNumber}</p>
                            </td>
                            <td className="p-3 ">
                            <p>{singleData?.parcelDeliveryAddress}</p>
                            </td>
                            <td className="p-3 ">
                                <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <span className="font-bold text-red-700">
                                    <button className=" py-1 px-2 btn-color hover:bg-amber-600"><FaLocationPinLock className='text-xl'></FaLocationPinLock></button>
                                    </span>
                                </span>
                            </td>
                            <td className="p-3 ">
                                <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                <button onClick={()=> handleCancel(singleData?._id)} className="py-1 px-2 bg-red-500 hover:bg-red-700">cancel</button> </span>
                            </td>
                            <td className="p-3 ">
                            <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
{
    singleData.status === "delivered" ? <button disabled className="py-1 px-2 bg-green-100 ">Deliver</button> :                                 <button onClick={()=> handleDeliver(singleData?._id)} className="py-1 px-2 bg-green-500 hover:bg-green-700">Deliver</button> 


}
                            </span>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
        
    </div>
    );
};

export default MyDeliveryList;