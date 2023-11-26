import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AllParcels = () => {
    const axiosPublic = useAxiosPublic()
    const [trueModal, setTrueModal] = useState(false)
    const [id, setId] = useState([])
    const [deliveryData, setDeliveryData] = useState([])

    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['all parcels'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-all-parcel')
            return res.data;
        }

    })
   

    //for modal
    const openModal = id => {
        setId(id)
        setTrueModal(true)

axiosPublic.get('/get-all-delivery-man')
.then(res => {
    console.log(res.data);
    setDeliveryData(res.data)
})
.catch(error => {
    console.log(error.message);
})


    }

    const closeModal = () => {
        setTrueModal(false)
    }


    const handleGetModalData = e => {
        e.preventDefault()
       const form = e.target;
       const deliveryMan = form.option.value;
       const date = form.date.value;
       const modalData = {
        deliveryManId: deliveryMan, 
        approxDeliveryDate: date,
        status: "on the way"
       }
       
       axiosPublic.patch(`/select-delivery-man/${id}`, modalData)
       .then(res => {
        console.log(res.data);
        refetch()
        if(res.data.modifiedCount){
            refetch()
            closeModal()
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
       })
       .catch(error => {
        console.log(error.message);
       })
    }


    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leadi">All Parcels</h2>

            {
                trueModal ? <div className="bg-slate-300 w-96 card mx-auto my-auto flex gap-6 p-10">

                   <form onSubmit={handleGetModalData}>
                   <div className="form-control w-full max-w-xs">
                        <label>
                            <p>select delivery man</p>
                        </label>
                        <select name="option" className="select select-bordered">
                            <option disabled selected>Pick one delivery man</option>
                            {
                                deliveryData.map(singleDeliveryData => <option  value={singleDeliveryData._id}>{singleDeliveryData.name}</option>)
                            }
                        </select>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label>
                            <p>Approximate delivery date</p>
                        </label>
                        <input type="date" name="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="flex justify-center gap-10">
                        <button  type="submit" className="btn">assign</button>
                        <button onClick={closeModal} className="btn">close</button>
                    </div>

                   </form>

                </div>

                    :

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
                                                    <button onClick={() => openModal(singleData._id)} className="bg-lime-600 text-white px-2 py-1">Manage</button>
                                                </span>
                                            </span>
                                        </td>

                                    </tr>)
                                }


                            </tbody>
                        </table>



                    </div>
            }

        </div>
    );
};

export default AllParcels;



