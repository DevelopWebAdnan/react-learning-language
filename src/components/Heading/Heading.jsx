import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='text-center mb-5 md:mb-6 lg:mb-7'>
            <h3 className='text-lg md:text-xl lg:text-2xl font-mono'>{subtitle}</h3>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-rose-800'>{title}</h2>
        </div>
    );
};

export default Heading;