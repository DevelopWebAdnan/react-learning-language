import React from 'react';
import Navbar from '../Navbar/Navbar';
import logoRemoveBg from "../../assets/images/1-removebg.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
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