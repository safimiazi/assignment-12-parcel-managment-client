import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';

const Root = () => {
    
    return (
        <div className='body-color'>
            <Navbar></Navbar>
            <div className='custom-min-height'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;