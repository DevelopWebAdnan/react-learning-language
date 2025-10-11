import React from 'react';
import Heading from '../../components/Heading/Heading';
import Tutorial from '../../components/Tutorial/Tutorial';
import { Outlet } from 'react-router-dom';

const StartLearning = () => {
    // const vocabularies = useLoaderData();
    // console.log(vocabularies);
    
    return (
        <div className='my-14 md:my-20'>
            <div className="hero bg-[#5bc57a] min-h-11 py-6 md:py-7 mb-4 md:mb-5">
                <div className="hero-content text-center">
                    <div>
                        <Heading subtitle="Start Learning"></Heading>
                        <Heading title="Let's Learn"></Heading>
                    </div>
                </div>
            </div>

            {/* 10 static cards */}
            <Outlet></Outlet>

            {/* Tutorial section */}
            <section className='my-14 md:my-16 lg:my-20'>
                <Tutorial></Tutorial>
            </section>
        </div>
    );
};

export default StartLearning;