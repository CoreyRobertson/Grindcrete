import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";
import Link from 'next/link';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Overlay from './Overlay';



const Navbar = () => {

    const [overlayVisible, setOverlayVisible] = useState(false);

    useEffect(() => {
        // Ensure GSAP plugins are properly registered
        gsap.registerPlugin(ScrollTrigger);

        // Setting up ScrollTrigger for the h2 coming in from the left
        gsap.fromTo("nav .touch",
            { opacity: 1, x: 0 }, // Initial state
            {
                opacity: 0,
                y: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: ".hero_section",
                    start: "top top", // Adjust these values as needed
                    end: "bottom top",
                    scrub: 1,
                    toggleActions: "restart pause reverse pause",
                }
            }
        );
    }, []);

    return (
        <>
            <nav>
                <Link href='/'>

                    <Image src='/images/Logo3.svg' height={30} width={150} alt='logo3' />

                </Link>
                <a className='inter-light touch'>Get in touch <BsArrowUpRight /></a>
                <button onClick={() => setOverlayVisible(!overlayVisible)}>
                    <HiOutlineMenuAlt4 style={{ color: '#FFFFFF', fontSize: 30 }} />
                </button>
            </nav>
            <Overlay isVisible={overlayVisible} onClose={() => setOverlayVisible(false)} />
        </>
    )
}

export default Navbar