import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import axios from 'axios';
import { toast } from 'react-toastify';

const BookParcel = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const [totalPrice, setTotalPrice] = useState([])

    const handleWeight = (e) => {
        const weight = e.target.value;
        console.log(weight);
        const price = parseInt(weight * 50)
        if(price < 151){
            setTotalPrice(price)
        }
    }

    // **GET THE CURRENT DATE **//
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedDate = `${hours}:${minutes} ||${day}/${month}/${year}` ;


    const handleBookParcel = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const parcelType = form.types.value;
        const parcelDeliveryAddress = form.address.value;
        const deliveryDate = form.date.value;
        const price = form.price.value;
        const deliveryAddressLatitude = form.latitude.value;
        const longitude = form.longitude.value;
        const receiverName = form.receiver.value;
        const receiverNo = form.receiverNo.value;
        const parcelWeight = form.weight.value;
        const bookingDate = formattedDate
        // console.log(name, email, phone, parcelType, parcelDeliveryAddress, deliveryDate, price, deliveryAddressLatitude, longitude, receiverName, receiverNo, parcelWeight);
        const addPhoneNo = {phone:phone}
axiosPublic.patch(`/add-phone-no/${user.email}`, addPhoneNo)
.then(res => {
    console.log(res.data);
})
.then(error => {
    console.log(error.message);
})

        const parcelBookingData = {
            name: name,
            email: email,
            phone: phone,
            parcelType: parcelType,
            parcelDeliveryAddress: parcelDeliveryAddress,
            deliveryDate: deliveryDate,
            bookingDate: bookingDate,
            deliveryAddressLatitude: deliveryAddressLatitude,
            deliveryAddressLongitude: longitude,
            receiverName: receiverName,
            receiverMobileNumber: receiverNo,
            parcelWeight: parcelWeight,
            price: parseInt(price),
            status: "pending"
        }
        console.log("line 65", parcelBookingData);
        
        axiosPublic.post('/parcel-booking',parcelBookingData)
     .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
            toast.success("successfully booking")
            // form.reset()
        }
     })
     .catch(error => {
        console.log(error.message);
     })


    }



    return (
        <div>
            <div className="min-h-screen p-6  flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl mb-6">Book a Parcel</h2>

                        <div className="card-color rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="">
                                    <p className="font-medium text-lg">Personal Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>
                                {/* User Name */}
                                <div className="lg:col-span-2">
                                    <form onSubmit={handleBookParcel}>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label>Full Name</label>
                                                <input type="text" name="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={user?.displayName} />
                                            </div>
                                            {/* User Email  */}
                                            <div className="md:col-span-5">
                                                <label>Email Address</label>
                                                <input type="text" readOnly name="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={user?.email} placeholder="email@domain.com" />
                                            </div>
                                            {/* User Phone Number */}
                                            <div className="md:col-span-3">
                                                <label>Enter Your Mobile No.</label>
                                                <input type="text" name="phone" className="h-10  border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Mobile No." />
                                            </div>
                                            {/* Parcel Types */}
                                            <div className="md:col-span-2">
                                                <label >Parcel Types </label>
                                                <input type="text" name="types" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Parcel Types" />
                                            </div>
                                            {/* Parcel Delivery Address */}
                                            <div className="md:col-span-2">
                                                <label > Parcel Delivery Address</label>
                                                <input type="text" name="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Parcel Delivery Address" />
                                            </div>
                                            {/* Requested Delivery Date */}
                                            <div className="md:col-span-3">
                                                <label>Request a Delivery Date</label>
                                                <input type="date" name="date" className="h-10  border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Delivery Date" />
                                            </div>

                                            {/* Delivery Address Latitude */}
                                            <div className="md:col-span-3">
                                                <label >Delivery Address Latitude </label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="text" name="latitude" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="ex: (i.e 21.121365496)" />
                                                </div>
                                            </div>
                                            {/* Delivery Address Longitude */}
                                            <div className="md:col-span-2">
                                                <label >Delivery Address Longitude</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="text" name="longitude" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="ex: (i.e 21.121365496)" />
                                                </div>
                                            </div>
                                            {/* Receiver Name */}
                                            <div className="md:col-span-2">
                                                <label >Receiver Name</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="text" name="receiver" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Receiver Name" />
                                                </div>
                                            </div>
                                            {/* Receiver Phone Number */}
                                            <div className="md:col-span-3">
                                                <label >Receiver Mobile Number</label>
                                                <input type="text" name="receiverNo" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Receiver Phone" />
                                            </div>
                                            {/* Parcel Weight */}
                                            <div className="md:col-span-3">
                                                <label >Parcel Weight</label>
                                                <input onChange={handleWeight} type="number" min={0} name="weight" id="weight" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Weight" />
                                            </div>
                                            {/* Price */}
                                            <div className="md:col-span-2">
                                                <label >Price</label>
                                                <input type="number" value={totalPrice} readOnly name="price" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Price" />
                                            </div>
                                            <div className="md:col-span-5">
                                                <label >Please Check Before Submit</label>
                                                <input type="submit" value={'Submit'} className="h-10 btn-color text-white border mt-1 rounded px-4 w-full bg-[#480ca8]" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookParcel;