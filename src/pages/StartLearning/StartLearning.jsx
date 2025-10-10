import React from 'react';
import Heading from '../../components/Heading/Heading';
import Tutorial from '../../components/Tutorial/Tutorial';

const StartLearning = () => {
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
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-7'>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 1</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 2</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 3</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 4</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 5</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 6</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 7</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 8</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 9</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 10</h2>
                    </div>
                </div>
            </div>

            {/* Tutorial section */}
            <section>
                <Tutorial></Tutorial>
            </section>
        </div>
    );
};

export default StartLearning;