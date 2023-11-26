import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AllParcels = () => {
    const axiosPublic = useAxiosPublic()


    const { isPending, error, data } = useQuery({
        queryKey: ['all parcels'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-all-parcel')
            return res.data;
        }

    })
    
    //for modal




    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leadi">All Parcels</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full text-xs bg-white">
                    <thead className="dark:bg-gray-700">
                        <tr className="text-left font-bold">
                            <th className="p-3"> #</th>
                            <th className="p-3">Booked User Name</th>
                            <th className="p-3">Booked User Phone</th>
                            <th className="p-3"> Booking Date</th>

                            <th className="p-3"> Req Delivery Date</th>
                            <th className="p-3">Cost</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Manage</th>

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
                                    <p>{singleData.phone}</p>
                                </td>
                                <td className="p-3">
                                    <p>{singleData.bookingDate}</p>
                                </td>

                                <td className="p-3 ">
                                    <p>{singleData.deliveryDate}</p>
                                </td>
                                <td className="p-3 ">
                                    <p>{singleData?.price}</p>
                                </td>
                                <td className="p-3 ">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span className="font-bold text-violet-800">
                                            {singleData?.status}
                                        </span>
                                    </span>
                                </td>
                                <td className="p-3 ">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span className="font-bold text-red-700">
                                            <button  onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-lime-600 text-white px-2 py-1">Manage</button>
                                        </span>
                                    </span>
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>


                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

        </div>
    );
};

export default AllParcels;



