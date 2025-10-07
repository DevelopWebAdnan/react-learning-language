import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import AboutUs from '../AboutUs/AboutUs';
import Success from '../../components/Success/Success';
import Testimonials from '../../components/Testimonials/Testimonials';
import Speciality from '../../components/Speciality/Speciality';
// import pexelsAssad from "../../assets/images/pexels-assadtanoliphotographer.jpg";
// import pexelsDefri from "../../assets/images/pexels-defrinomaasy.jpg";
// import pexelsSfean from "../../assets/images/pexels-sfean-zaben.jpg";
// import pexelsPok from "../../assets/images/pexels-pok-rie.jpg";

const Home = () => {
    return (
        <div>
            <h3 className="text-rose-700 font-semibold">Home</h3>
            <section className='my-14 md:my-16 lg:my-20'>
                <ImageSlider></ImageSlider>
            </section>
            <section className='my-14 md:my-16 lg:my-20'>
                <AboutUs></AboutUs>
            </section>
            <section>
                <Success></Success>
            </section>
            <h4 className="text-2xl font-bold text-rose-800">2 extra sections: with my own design.</h4>
            <section className='my-14 md:my-16 lg:my-20'>
                 <Testimonials></Testimonials>
            </section>
            <section className='my-14 md:my-16 lg:my-20'>
                <Speciality></Speciality>
            </section>
        </div>
    );
};

export default Home;