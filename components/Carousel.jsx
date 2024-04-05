import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
    };


    return (
        <div className="carousel_container">

            <Slider {...settings}>
                <div>
                    <Image src='/images/img1.jpg' alt="img1" height={500} width={400} quality={100} />
                </div>
                <div>
                    <Image src='/images/img2.jpg' alt="img2" height={500} width={400} quality={100} />
                </div>
                <div>
                    <Image src='/images/img3.jpg' alt="img3" height={500} width={400} quality={100} />
                </div>
                <div>
                    <Image src='/images/img4.jpg' alt="img4" height={500} width={400} quality={100} />
                </div>
                <div>
                    <Image src='/images/img5.jpg' alt="img5" height={500} width={400} quality={100} />
                </div>
                <div>
                    <Image src='/images/img6.jpg' alt="img6" height={500} width={400} quality={100} />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;