import chatting from '../../assets/images/chatting.png';
import reshotVideo from '../../assets/images/reshot-icon-video.svg';
import reshotLanguage from '../../assets/images/reshot-icon-language.svg';
import Heading from '../Heading/Heading';

const Speciality = () => {
    return (
        <div>
            <Heading subtitle="Our Course Speciality"></Heading>
            <Heading title="Why Choose Us"></Heading>
            <div className="join join-vertical lg:join-horizontal flex justify-center items-center mt-6">
                <div className="card join-item bg-base-100 w-full md:w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={chatting}
                            alt="chatting.png"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Vocabulary Cards</h2>
                        <p>A visitor / an user who has an account on this website can access certain features, but after logging in, and then visit those certain parts of the application.</p>
                    </div>
                </div>
                <div className="card join-item bg-base-100 w-full md:w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={reshotVideo}
                            alt="reshot-icon-video.svg"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Video Tutorials</h2>
                        <p>Visitors / users who are logged in can visit certain parts of the application, but in case of video tutorials, they can access this part of the application / feature, without having an account on this website.</p>
                    </div>
                </div>
                <div className="card join-item bg-base-100 w-full md:w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={reshotLanguage}
                            alt="reshot-icon-language.svg"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">150 vocabularies</h2>
                        <p>A visitor / an user who needs to enhance his / her vocabulary in Arabic, and has an account on this website can access certain features, but without logging in, cannot visit those certain parts of the application.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Speciality;