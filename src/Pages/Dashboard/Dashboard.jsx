import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaAddressBook, FaArrowAltCircleRight, FaDollyFlatbed, FaHeadset, FaHome, FaOutdent, FaUserEdit } from "react-icons/fa";
import useAdmin from '../../Hooks/useAdmin';
import usedDeliveryMan from '../../Hooks/usedeliveryMan';

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isDeliveryMan] = usedDeliveryMan()
   
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen nav-footer'>
                <ul className='menu text-white'>


                    {
                        isAdmin ? (
                            <>
                                <li><NavLink to="/dashboard/statistics"><FaArrowAltCircleRight></FaArrowAltCircleRight> Statistics</NavLink></li>
                                <li><NavLink to="/dashboard/all-delivery-men"><FaDollyFlatbed></FaDollyFlatbed> All Delivery Men</NavLink></li>
                                <li><NavLink to="/dashboard/all-parcels"><FaUserEdit></FaUserEdit> All Parcels</NavLink></li>
                                <li><NavLink to="/dashboard/all-users"><FaUserEdit></FaUserEdit> All Users</NavLink></li>
                            </>
                        ) : isDeliveryMan ? (
                            <>
                                <li><NavLink to="/dashboard/my-delivery-list"><FaUserEdit></FaUserEdit> My Delivery List</NavLink></li>
                                <li><NavLink to="/dashboard/my-reviews"><FaUserEdit></FaUserEdit> My Reviews</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/dashboard/book-parcel"><FaArrowAltCircleRight></FaArrowAltCircleRight> Book a Parcel</NavLink></li>
                                <li><NavLink to="/dashboard/my-parcel"><FaDollyFlatbed></FaDollyFlatbed> My Parcels</NavLink></li>
                                <li><NavLink to="/dashboard/my-profile"><FaUserEdit></FaUserEdit> My Profile</NavLink></li>
                            </>
                        )
                    }






                </ul>
            </div>
            <div className='flex-1 body-color'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;