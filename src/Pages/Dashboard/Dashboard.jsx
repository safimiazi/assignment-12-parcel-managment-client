import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {  FaAddressBook, FaArrowAltCircleRight, FaDollyFlatbed, FaHeadset, FaHome, FaOutdent, FaUserEdit } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen nav-footer'>
                <ul className='menu text-white'>
                    <li><NavLink to="/dashboard/book-parcel"><FaArrowAltCircleRight></FaArrowAltCircleRight> Book a Parcel</NavLink></li>
                    <li><NavLink to="/dashboard/my-parcel"><FaDollyFlatbed></FaDollyFlatbed> My Parcels</NavLink></li>
                    <li><NavLink to="/dashboard/my-profile"><FaUserEdit></FaUserEdit> My Profile</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 body-color'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;