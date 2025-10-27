import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    // console.log(user, loading);

    const location = useLocation();
    console.log(location);
    const {pathname} = location;
    console.log(pathname);

    if(loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate pathname={pathname} to="/login"></Navigate>;
    }

    return (
        children
    );
};

export default PrivateRoute;