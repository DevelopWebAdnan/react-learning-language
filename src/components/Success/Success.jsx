import React from 'react';
import CountUp from 'react-countup';
// import CountUp, { useCountUp } from 'react-countup';

const Success = () => {
    // useCountUp({ ref: 'counter', end: 1234567 });
    return (
        <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-rose-800">Our Success</h3>
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

            {/* Stat */}
            <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="text-xl lg:text-2xl">Users</div>
                    <CountUp start={0} end={1000}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} className="stat-value"></span>
                            </div>
                        )}
                    </CountUp>
                    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                </div>

                <div className="stat">
                    <div className="text-xl lg:text-2xl">Lessons</div>
                    <CountUp start={0} end={10}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} className="stat-value"></span>
                            </div>
                        )}
                    </CountUp>

                </div>

                <div className="stat">
                    <div className="text-xl lg:text-2xl">Vocabularies</div>
                    <CountUp start={0} end={150}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} className="stat-value"></span>
                            </div>
                        )}
                    </CountUp>

                </div>

                <div className="stat">
                    <div className="text-xl lg:text-2xl">Tutorials</div>
                     <CountUp start={0} end={10}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} className="stat-value"></span>
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
        </div>
    );
};

export default Success;