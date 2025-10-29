import Heading from '../Heading/Heading';
import { useNavigate } from 'react-router-dom';

const Tutorial = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <iframe width="360" height="315" src="https://www.youtube.com/embed/Fiu_I15vaY4?si=M_9POg4a9DPsJwoB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    
                    <div>
                        <Heading title="Learning the Alphabet"></Heading>
                        <p className="py-6">
                            Learning Arabic alphabets may seem a bit easier when we watch a video on it.
                        </p>
                        <button className="btn btn-outline btn-lg font-bold text-base-100 bg-[#5FCF80]" onClick={() => navigate("/tutorials")}>View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tutorial;