import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const MyParcel = () => {
    const axiosPublic = useAxiosPublic()
    const [data, setData] = useState([])

    useEffect(() => {
        axiosPublic.get('/my-parcel')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .then(error => {
                console.log(error.message);
            })
    }, [])
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leadi">Invoices</h2>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((singleData, index) => <tr singleData={singleData} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-3">
                                    <p>{index + 1}</p>
                                </td>
                                <td className="p-3">
                                    <p>{singleData.name}</p>
                                </td>
                                <td className="p-3">
                                    <p>{singleData.deliveryDate}</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                </td>
                                <td className="p-3 ">
                                    <p>{singleData.bookingDate}</p>
                                </td>
                                <td className="p-3 ">
                                    <p>idfgpg5332115,792</p>
                                </td>
                                <td className="p-3 ">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span className="text-green-500">{singleData.status}</span>
                                    </span>
                                </td>
                                <td className="p-3 ">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span className="font-bold text-violet-800">
                                            <Link to={`/dashboard/update/${singleData._id}`}><button className="bg-violet-400 py-1-3">Update</button></Link>
                                        </span>
                                    </span>
                                </td>
                                <td className="p-3 ">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span className="font-bold text-red-700"><button className="bg-red-300 px-3 py-1">Cancel</button></span>
                                    </span>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <div className="flex gap-2 my-4 justify-center">
                {/* <button className="px-28 rounded-lg py-1 border hover:bg-slate-300">Review</button> */}
                <button className="px-28 bg-green-600 rounded-lg py-1 border hover:bg-slate-300" onClick={() => document.getElementById('my_modal_3').showModal()}>Review</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <p>This is Gonna be a Form</p>
                    </div>
                </dialog>
                <button className="px-28 btn-color rounded-lg py-1 border hover:bg-slate-300">Pay Now</button>

            </div>
        </div>
    );
};

export default MyParcel;