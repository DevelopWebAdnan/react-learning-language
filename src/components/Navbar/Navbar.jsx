import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import logoRemoveBg from "../../assets/images/1-removebg.png";

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);
    console.log(user);

    // const handleSignOut = () => {
    //     signOutUser()
    //     .then(result => {
    //         console.log(result.user);
    //     })
    //     .catch(error => console.log('ERROR', error.message));
    // }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/startLearning'>Start-learning</NavLink></li>
        <li><NavLink to='/tutorials'>Tutorials</NavLink></li>
        <li><NavLink to='/aboutUs'>About-us</NavLink></li>
        {
            user && <li><NavLink to='/myProfile'>My-profile</NavLink></li>
        }
    </>


    return (
        <div className="navbar bg-white/30 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">Email </a> */}
                <div className='w-20 md:w-32 lg:w-40'>
                    <Link to="/">
                        <img className='w-screen' src={logoRemoveBg} alt="" />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <img src={user?.photoURL} className='w-11 md:w-20 lg:w-24 rounded-4xl md:rounded-3xl lg:rounded-2xl' alt="" />
                        <button onClick={signOutUser} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Log-Out</button>
                    </>
                        :
                        <Link className='btn btn-lg lg:btn-xl font-bold text-base-100 bg-[#5FCF80]' to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;