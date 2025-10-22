import React from 'react';
import Navbar from '../Navbar/Navbar';
import logoRemoveBg from "../../assets/images/1-removebg.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center">Welcome, logged in user</h1>
            <div className='flex justify-center'>
                <Link to="/" className='w-64'>
                    <img className='w-screen' src={logoRemoveBg} alt="" />
                </Link>
            </div>
            <nav>
                <Navbar></Navbar>
            </nav>
        </div>
    );
};

export default Header;