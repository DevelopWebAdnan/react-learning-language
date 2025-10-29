import Heading from '../Heading/Heading';

const Testimonials = () => {
    return (
        <div>
            <Heading subtitle="Testimonials"></Heading>
            <Heading title="WHAT ARE THEY SAYING"></Heading>

            {/* Carousel */}
            <div className="w-full carousel">
                <div id="item1" className="carousel-item w-full justify-center">
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img
                                        src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
                                        alt="Tailwind-CSS-Avatar-component"
                                    />
                                </div>
                            </div>

                            <h2 className="card-title">Sanjid bhai</h2>
                            <p> - " I like the way the website is divided into different parts. "</p>
                            <div className="justify-end card-actions">
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full justify-center">
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img
                                        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                                        alt="Tailwind-CSS-Avatar-component"
                                    />
                                </div>
                            </div>

                            <h2 className="card-title">Riyon bhai</h2>
                            <p> - " I appreciate the app’s ability to improve vocabulary grades. "</p>
                            <div className="justify-end card-actions">
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full justify-center">
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img
                                        src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
                                    />
                                </div>
                            </div>

                            <h2 className="card-title">Sadman Sakib</h2>
                            <p> - " It delivers random words with pronunciation, part of speech, and example sentences."</p>
                            <div className="justify-end card-actions">
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full justify-center">
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img
                                        src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                                    />
                                </div>
                            </div>

                            <h2 className="card-title">Nahiyan</h2>
                            <p> - " Highly rated for professional language development and ease of use across devices. "</p>
                            <div className="justify-end card-actions">
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Testimonials;