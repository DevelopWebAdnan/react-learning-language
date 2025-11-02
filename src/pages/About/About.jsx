import pexelsJulia from "../../assets/images/pexels-julia-m-cameron.jpg";
import Heading from '../../components/Heading/Heading';

const About = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={pexelsJulia}
                        className="max-w-2xs md:max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <Heading title="Our Website's Mission"></Heading>
                        <p className='md:text-lg lg:text-xl'>Learning a new language can be challenging, especially when it comes to retaining vocabulary. Our mission is to create a fun and interactive language learning application designed to help users expand their vocabulary and improve their communication skills in the language. We have to create an application for a specific language learning. We have to select any language except Bengali and English. We have selected Arabic.</p>
                        <p className='md:text-lg lg:text-xl'>Our application will help users to overcome the learning challenges of vocabulary in an easier way. Users can start with a simple click. Users will be logged in to see the vocabularies. It will be handled by Firebase.</p>
                        {/* <button className="btn btn-outline md:btn-lg lg:btn-xl rounded-2xl mt-4">Browse Our Courses</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;