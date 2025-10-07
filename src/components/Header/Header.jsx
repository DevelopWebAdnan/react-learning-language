import React from 'react';
import Navbar from '../Navbar/Navbar';
import logoRemoveBg from "../../assets/images/1-removebg.png";

const Header = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <a href='#' className='w-64'>
                    <img className='w-screen' src={logoRemoveBg} alt="" />
                </a>
            </div>
            <nav>
                <Navbar></Navbar>
            </nav>
        </div>
    );
};

export default Header;