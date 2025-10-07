import React from 'react';
import CountUp from 'react-countup';
// import CountUp, { useCountUp } from 'react-countup';

const Success = () => {
    // useCountUp({ ref: 'counter', end: 1234567 });
    return (
        <div>
            <h4 className="text-2xl font-bold text-rose-800">Success section: User count, lesson count, vocabulary count, Tutorial count. Use dummy information for count. Animate this success count.</h4>
            {/* <CountUp end={100} delay={2}
             duration={2.75}
             separator=' '
             decimals={4}
             decimal=','
             prefix='EUR '
             suffix=' left'
             onEnd={() => console.log('Ended!')}
             onStart={() => console.log('Started!')}
            >
                 {({ countUpRef, start }) => ( */}
            {/* <div> */}
            {/* <span ref={countUpRef}></span> */}
            {/* <span id='counter'></span>; */}
            {/* </div> */}
            {/* )} 
            </CountUp> */}
            <CountUp start={0} end={100}>
                {({ countUpRef }) => (
                    <div>
                        <span ref={countUpRef}></span>
                    </div>
                )}
            </CountUp>
        </div>
    );
};

export default Success;