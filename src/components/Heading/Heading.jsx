import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div>
            <h3 className='text-lg md:text-xl lg:text-2xl font-mono'>{subtitle}</h3>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{title}</h2>
        </div>
    );
};

export default Heading;