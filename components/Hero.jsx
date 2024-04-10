import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
    // State for dynamically setting the image source
    const [imageSrc, setImageSrc] = useState('/images/HeroIMage.png');

    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        // GSAP animations for your elements
        gsap.fromTo(".hero_text-top h2",
            { opacity: 1, x: 0 },
            {
                opacity: 0,
                x: -200,
                duration: 1,
                scrollTrigger: {
                    trigger: ".hero_section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 3,
                    toggleActions: "restart pause reverse pause",
                }
            }
        );

        gsap.fromTo(".hero_text-bottom h2",
            { opacity: 1, x: 0 },
            {
                opacity: 0,
                x: 200,
                duration: 1,
                scrollTrigger: {
                    trigger: ".hero_section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 3,
                    toggleActions: "restart pause reverse pause",
                }
            }
        );

        // Function to dynamically change the image source based on the screen width
        const updateImageSrc = () => {
            if (window.innerWidth <= 768) { // Mobile devices width
                setImageSrc('/images/HeroImage2.png');
            } else {
                setImageSrc('/images/HeroImage.png');
            }
        };

        // Update image source on initial render and window resize
        updateImageSrc();
        window.addEventListener('resize', updateImageSrc);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateImageSrc);
    }, []);

    return (
        <section className='hero_section'>
            <div className='hero_text-container'>
                <div className='hero_text-top'>
                    <h2 className='inter-light'>EXISTING SLABS +</h2>
                </div>
                <div className='hero_text-bottom'>
                    <p className='roboto-light'>
                        At Grind Crete, we specialise in transforming your concrete surfaces into stunning masterpieces that exude durability, style, and functionality. <span style={{ color: '#F2F2F2' }}>Servicing Southeast Melbourne, reach out today to bring new life to your space.</span>
                    </p>
                    <button type='button'>
                        BOOK NOW
                    </button>
                    <h2 className='inter-bold'>
                        NEW BUILDS
                    </h2>
                </div>
            </div>
            <div className='hero_image-container'>
                <Image src={imageSrc} priority alt='Hero Image' quality={65} layout='fill' />
            </div>
            <div className='logo2'>
                <Image src='/images/Logo2.svg' alt='Grindcrete Logo' layout='fill' quality={100} />
            </div>
        </section>
    );
};

export default Hero;
