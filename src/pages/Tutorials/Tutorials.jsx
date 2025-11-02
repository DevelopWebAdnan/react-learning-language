import { Link } from 'react-router-dom';
import Heading from '../../components/Heading/Heading';

const Tutorials = () => {
   
    return (
        <div>
            <div className="hero bg-[#5bc57a] min-h-11 py-6 md:py-7 mb-4 md:mb-5">
                <div className="hero-content text-center">
                    <div>
                        <Heading title="Tutorials"></Heading>
                    </div>
                </div>
            </div>

            <section className='my-14 md:my-16 lg:my-20'>
                <div className='text-center mb-4 md:mb-5 lg:mb-6'>
                    <div className="input">https://www.youtube.com/</div>
                </div>
                <div className="grid place-content-center border-t border-base-300">

                    <div className="card shadow-sm">
                        <div className='card-body'>

                            <iframe width="300" height="315" src="https://www.youtube.com/embed/D1aVVfBsA5s?si=8XLLp4jDlIpZW9vZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className='card-body'>
                            <iframe width="300" height="315" src="https://www.youtube.com/embed/4C6AgaSCn5A?si=X7JhLtKE7AzlugLf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="card-body">

                            <iframe width="300" height="315" src="https://www.youtube.com/embed/vEfd47I7R68?si=eqIFqgV9bqnUjbWK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className='card-body'>

                            <iframe width="300" height="315" src="https://www.youtube.com/embed/XHXoJNaXyls?si=J7mc-qpNQHp-nHf5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="card shadow-sm">
                        <div className="card-body">

                            <iframe width="300" height="315" src="https://www.youtube.com/embed/oidicz5Trvc?si=uPhXWt7vQe6qFXML" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className='card-body'>
                            <iframe width="300" height="315" src="https://www.youtube.com/embed/Mj1G1HwehPg?si=CBN_ByxYFG-tRdc7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="card-body">

                            <iframe width="300" height="315" src="https://www.youtube.com/embed/TtT69_X5sf4?si=zdtr0_3U3xyWhQur" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className='card-body'>
                            <iframe width="300" height="315" src="https://www.youtube.com/embed/XU4q9RmLj38?si=wT70hgLpERv0I0H-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section >

            <div className='text-center mb-4 md:mb-5'>
                <Link to="/startLearning"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-base-100 bg-[#5FCF80]">Learn Vocabularies</button></Link>
            </div>
        </div >
    );
};

export default Tutorials;