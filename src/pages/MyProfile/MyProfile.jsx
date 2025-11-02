import { useContext } from 'react';
import Heading from '../../components/Heading/Heading';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <title>My Profile | React Learning Language</title>
            <Heading title={`Welcome, ${user && user.displayName}`}></Heading>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={user?.photoURL}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Name: {user.displayName}</h1>
                        <p className="py-6 text-lg md:text-xl lg:text-2xl">Email: {user.email}</p>
                        <Link to='/updateProfile'><button className="btn btn-lg lg:btn-xl font-bold text-base-100 bg-[#5FCF80]">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;