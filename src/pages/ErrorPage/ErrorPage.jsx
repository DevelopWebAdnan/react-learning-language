import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div className='text-center'>
            <p className='text-lg md:text-xl lg:text-2xl text-red-800'>{error.statusText || error.message}.</p>
            {
                error.status === 404 && <div>
                    <h2 className="text-rose-800 text-2xl md:text-3xl lg:text-4xl font-bold">Page not found</h2>
                    <p className="md:text-lg">Go back to where you are from</p>
                    <Link to="/"><button className="btn btn-outline btn-lg">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;