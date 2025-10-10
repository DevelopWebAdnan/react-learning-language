import React from 'react';
import Heading from '../Heading/Heading';

const Tutorial = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <iframe src="https://www.youtube.com/watch?v=Fiu_I15vaY4"></iframe>
                    {/* <video
                        src="https://www.youtube.com/watch?v=Fiu_I15vaY4"
                        className="max-w-sm rounded-lg shadow-2xl"
                        /> */}
                    <div>
                        <Heading title="Learning the Alphabet"></Heading>
                        <p className="py-6">
                            Learning Arabic alphabets may seem a bit easier when we watch a video on it.
                        </p>
                        <button className="btn btn-outline btn-lg">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tutorial;