import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className='mt-7 md:mt-11 lg:mt-14 text-center'>
            <p className='text-lg md:text-xl lg:text-2xl text-red-600'>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h2 className="text-rose-500 text-2xl md:text-3xl lg:text-4xl font-bold my-7 md:my-10 lg:my-12">Page not found.</h2>
                    <p className="md:text-lg">Go back to where you are from</p>
                    <Link to="/"><button className="btn btn-outline btn-lg">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;