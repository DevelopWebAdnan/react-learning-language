import CountUp from 'react-countup';
import Heading from '../Heading/Heading';

const Success = () => {
    return (
        <div>
           <Heading title="Our Success"></Heading>
           
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