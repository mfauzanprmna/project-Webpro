import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carousel = [
    { image: "LINE_ALBUM_jahim_230628.jpg"},
    { image: "LINE_ALBUM_Our First Date_230628.jpg"},
    { image: "LINE_ALBUM_bukber katanya_230628.jpg"},
    { image: "LINE_ALBUM_trial fansite_230628.jpg"},
];

const Jumbotron = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        appendDots: (dots) => (
            <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                <ul style={{ margin: '0' }}> {dots} </ul>
            </div>
        ),
        fade: true,
        width: 500,
    };

    let domain = window.location.hostname;

    if (domain === 'localhost') {
        domain = 'localhost:3000';
    }

    return (
        <div className="relative bg-gray-800 -z-10">
            <Slider {...settings} className='overflow-hidden'>
            {carousel.map((item) => (
                <div>
                    <img className="object-cover w-full sm:h-[39rem] opacity-60" src={`http://${domain}/${item.image}`} alt="Jumbotron 1" />
                </div>
            ))}
            </Slider>
            <div className="absolute inset-0 flex items-center justify-center mb-14">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-white opacity-75 sm:text-5xl md:text-6xl">
                        Tiwaibi Company
                    </h1>
                    <p className="text-white text-center opacity-75">COMPANY PROFILE</p>
                    {/* <p className="mt-3 text-lg text-gray-300 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis, velit eu
                        vestibulum ultrices, dui dolor molestie justo, et dictum ex tortor eu nisi.
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
