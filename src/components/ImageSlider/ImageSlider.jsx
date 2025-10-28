import pexelsAssad from "../../assets/images/pexels-assadtanoliphotographer.jpg";
import pexelsDefri from "../../assets/images/pexels-defrinomaasy.jpg";
import pexelsSfean from "../../assets/images/pexels-sfean-zaben.jpg";
import pexelsPok from "../../assets/images/pexels-pok-rie.jpg";
import Heading from '../Heading/Heading';

const ImageSlider = () => {
    return (
        <div>
            <Heading title="Images with a slider"></Heading>
            <div className="carousel w-full h-[600px]">
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
        </div>
    );
};

export default ImageSlider;