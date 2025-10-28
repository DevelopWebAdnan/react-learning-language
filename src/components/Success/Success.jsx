import CountUp from 'react-countup';
import Heading from '../Heading/Heading';
// import CountUp, { useCountUp } from 'react-countup';

const Success = () => {
    // useCountUp({ ref: 'counter', end: 1234567 });
    return (
        <div>
           <Heading title="Our Success"></Heading>
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
            <div className="stats stats-vertical lg:stats-horizontal shadow grid items-center md:justify-center">
                <div className="stat">
                    <div className="text-xl lg:text-2xl">Users</div>
                    <CountUp start={0} end={1000} delay={2} duration={7}>
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
                    <CountUp start={0} end={10} delay={2} duration={7}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} className="stat-value"></span>
                            </div>
                        )}
                    </CountUp>

                </div>

                <div className="stat">
                    <div className="text-xl lg:text-2xl">Vocabularies</div>
                    <CountUp start={0} end={150} delay={2} duration={7}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} className="stat-value"></span>
                            </div>
                        )}
                    </CountUp>

                </div>

                <div className="stat">
                    <div className="text-xl lg:text-2xl">Tutorials</div>
                     <CountUp start={0} end={10} delay={2} duration={7}>
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