import React from 'react';
import pexelsAssad from "../../assets/images/pexels-assadtanoliphotographer.jpg";
import pexelsDefri from "../../assets/images/pexels-defrinomaasy.jpg";
import pexelsSfean from "../../assets/images/pexels-sfean-zaben.jpg";
import pexelsPok from "../../assets/images/pexels-pok-rie.jpg";

const Home = () => {
    return (
        <div>
            <h3 className="text-rose-700 font-semibold">Home</h3>
            <h4 className="text-2xl font-bold text-rose-800">Banner/Slider section: Language learning images with a slider</h4>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={pexelsAssad}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={pexelsDefri}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={pexelsSfean}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={pexelsPok}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <h4 className="text-2xl font-bold text-rose-800">About section: Website's mission and how users can learn vocabularies</h4>
            <h4 className="text-2xl font-bold text-rose-800">Success section: User count, lesson count, vocabulary count, Tutorial count. Use dummy information for count. Animate this success count.</h4>
            <h4 className="text-2xl font-bold text-rose-800">2 extra sections: with my own design.</h4>
        </div>
    );
};

export default Home;