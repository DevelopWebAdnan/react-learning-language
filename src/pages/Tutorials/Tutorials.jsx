import React from 'react';
import { Outlet } from 'react-router-dom';
import Lesson from '../Lesson/Lesson';
import Heading from '../../components/Heading/Heading';

const Tutorials = () => {
    // const tutorials = useLoaderData();
    // console.log(tutorials);

    return (
        <div>
            {/* <h3 className="text-base-600 font-bold">Tutorials</h3> */}
            <div className="hero bg-[#5bc57a] min-h-11 py-6 md:py-7 mb-4 md:mb-5">
                <div className="hero-content text-center">
                    <div>
                        <Heading subtitle="Tutorials"></Heading>
                        <Heading title="Lessons"></Heading>
                    </div>
                </div>
            </div>

            {/* Lesson_no */}
            <Outlet></Outlet>
        </div>
    );
};

export default Tutorials;