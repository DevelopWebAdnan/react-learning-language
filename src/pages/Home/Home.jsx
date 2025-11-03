import ImageSlider from '../../components/ImageSlider/ImageSlider';
import About from '../About/About';
import Success from '../../components/Success/Success';
import Testimonials from '../../components/Testimonials/Testimonials';
import Speciality from '../../components/Speciality/Speciality';
import 'animate.css';

const Home = () => {
    
    return (
        <div className='bg_worldMapSaudiArabia'>
            <title>Home | Lingo Bingo</title>
            <section className='animate__animated animate__fadeInDownBig animate__slow my-14 md:my-16 lg:my-20'>
                <ImageSlider></ImageSlider>
            </section>
            <section className='my-14 md:my-16 lg:my-20 animate__animated animate__fadeInLeft animate__delay-2s animate__slow animate__delay-3s'>
                <About></About>
            </section>
            <section className='my-14 md:my-16 lg:my-20 animate__animated animate__shakeX animate__slow animate__repeat-3 animate__delay-3s'>
                <Success></Success>
            </section>

            {/* 2 extra sections: with my own design. */}
            <section className='animate__animated animate__heartBeat animate__repeat-2 animate__slower animate__delay-4s my-14 md:my-16 lg:my-20'>
                <Testimonials></Testimonials>
            </section>
            <section className='my-14 md:my-16 lg:my-20 animate__animated animate__pulse animate__slower animate__repeat-3 animate__delay-5s'>
                <Speciality></Speciality>
            </section>
        </div>
    );
};

export default Home;