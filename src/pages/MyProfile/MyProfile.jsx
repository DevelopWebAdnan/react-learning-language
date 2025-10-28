import React, { useContext } from 'react';
import Heading from '../../components/Heading/Heading';
import { AuthContext } from '../../providers/AuthProvider';

const MyProfile = () => {

    const { user } = useContext(AuthContext);

    // const updatedData = {
    //     displayName: 
    // }

    const handleUpdate = () => {

    }

    return (
        <div>
            <Heading title={`Welcome, ${user && user.displayName}`}></Heading>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={user?.photoURL}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{user.displayName}</h1>
                        <p className="py-6">{user.email}</p>
                        <button onClick={handleUpdate} className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;