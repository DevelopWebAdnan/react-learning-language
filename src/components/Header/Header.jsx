import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            {
                user && <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center">Welcome, {user.displayName}</h1>
            }
            {/* <div className='flex justify-center'>
                <Link to="/" className='w-64'>
                    <img className='w-screen' src={logoRemoveBg} alt="" />
                </Link>
            </div> */}
            <nav>
                <Navbar></Navbar>
            </nav>
        </div>
    );
};

export default Header;