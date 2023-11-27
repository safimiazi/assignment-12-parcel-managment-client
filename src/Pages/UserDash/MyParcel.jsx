import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";

const MyParcel = () => {
    const {user} = useAuth()
    console.log(user);
    const axiosPublic = useAxiosPublic()
    const [data, setData] = useState([])
    const [selectedStatus, setSelectedStatus] = useState('')


    const { isPending, refetch, error, parcel } = useQuery({
        queryKey: ['parcel'],
        queryFn: () => {
            axiosPublic.get(`/my-parcel/${user?.email}`)
                .then(res => {
                    // console.log(res.data);
                    setData(res.data)

                    return (res?.data);
                })
                .then(error => {
                    console.log(error?.message);
                })
        }
    })

//work for update:





    //work for delete
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete parcel",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/delete-parcel/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Parcel has been deleted.",
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


    //filter with status





    const handleStatusChange = e => {
        const status = e.target.value;
        axiosPublic.get(`/get-filter-data?email=${user?.email}&status=${status}`)
        .then(res => {
            setData(res.data);
            
        })
        .then(error => {
            console.log(error?.message);
        })
        
    }
  

    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leadi">Invoices</h2>
            <div className="form-control w-full max-w-xs mb-4">
                <label className="label">
                    <span className="label-text-alt">Select Status</span>
                </label>
                <select
                    className="select select-bordered"
                    onChange={handleStatusChange}
                >
                    <option disabled selected>select one one</option>
                    <option value={"pending"}>pending</option>
                    <option value={"on the way"}>on the way</option>
                    <option value={"delivered"}>delivered</option>
                    <option value={"returned"}>returned</option>
                    <option value={"cancelled"}>cancelled</option>
                </select>

            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs bg-white">
                    <thead className="dark:bg-gray-700">
                        <tr className="text-left font-bold">
                            <th className="p-3"> #</th>
                            <th className="p-3">Parcel Type</th>
                            <th className="p-3">Requested Delivery Date</th>
                            <th className="p-3">Approx Delivery Date</th>
                            <th className="p-3">Booking Date</th>
                            <th className="p-3">Delivery Man Id</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Update</th>
                            <th className="p-3">Cancel</th>
                            <th className="p-3">Review</th>
                            <th className="p-3">Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((singleData, index) => <tr singleData={singleData} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-3">
                                    <p>{index + 1}</p>
                                </td>
                                <td className="p-3">
                                    <p>{singleData.parcelType}</p>
                                </td>
                                <td className="p-3">
                                    <p>{singleData.deliveryDate}</p>
                                </td>
                                <td className="p-3">
                                    <p>{singleData.approxDeliveryDate}</p>
                                </td>
                                <td className="p-3 ">
                                    <p>{singleData.bookingDate}</p>
                                </td>
                                <td className="p-3 ">
                                    <p>{singleData?.deliveryManId}</p>
                                </td>
                                <td className="p-3 ">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span className="text-green-500">{singleData.status}</span>
                                    </span>
                                </td>
                                <td className="p-3 ">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span className="font-bold text-violet-800">
                                            {
                                                singleData.status == "pending" ? <Link to={`/dashboard/update/${singleData._id}`}><button className="bg-violet-400 py-1 px-3">Update</button></Link>
                                                    : <Link to={`/dashboard/update/${singleData._id}`}><button disabled className="bg-slate-200 py-1 px-3">Update</button></Link>

                                            }
                                        </span>
                                    </span>
                                </td>
                                <td className="p-3 ">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span className="font-bold text-red-700">
                                            {
                                                singleData.status == "pending" ? <button onClick={() => handleDelete(singleData._id)} className="bg-red-400 px-3 py-1">Cancel</button>
                                                    : <button disabled className="bg-red-100 px-3 py-1">Cancel</button>
                                            }
                                        </span>
                                    </span>
                                </td>
                                <td className="p-3 ">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span className="text-green-500">Review</span>
                                    </span>
                                </td>
                                <td className="p-3 ">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span className="text-green-500">Pay</span>
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

export default MyParcel;