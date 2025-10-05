import React from 'react';
import Navbar from '../Navbar/Navbar';
import logo from "../../assets/images/logo1.png";

const Header = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <a href='#' className='w-64'>
                    <img className='w-screen' src={logo} alt="" />
                </a>
            </div>
            <nav>
                <Navbar></Navbar>
            </nav>
        </div>
    );
};

export default Header;