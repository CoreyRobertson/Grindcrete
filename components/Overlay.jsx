import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';
import { CiFacebook, CiInstagram } from 'react-icons/ci';

const Overlay = ({ isVisible, onClose }) => {
    const linksContainerRef = useRef(null); // Reference to the container of links

    useEffect(() => {
        // Conditional to check if the overlay should be visible
        if (isVisible) {
            // First animate the overlay to become visible
            gsap.to(".overlay", {
                autoAlpha: 1,
                duration: 0.5,
                onComplete: () => {
                    // Once the overlay is visible, animate the links
                    gsap.to(linksContainerRef.current.children, {
                        autoAlpha: 1, // This handles both opacity and visibility
                        y: 0,
                        stagger: 0.1, // Stagger the animation of each link
                        duration: 0.4,
                        ease: 'power2.in',
                    });
                }
            });
        } else {
            // Animate the overlay to become invisible
            gsap.to(".overlay", { autoAlpha: 0, duration: 0.8 });
        }
    }, [isVisible]); // Dependency array ensures this effect runs when `isVisible` changes

    // Component for each link in the overlay to handle the close functionality and styling
    const OverlayLink = ({ href, children }) => (

        <Link onClick={onClose} className='inter-light overlay_link' href={href} style={{ textDecoration: 'none', opacity: 0, margin: '10px', cursor: 'pointer', fontWeight: 'light' }}>{children}</Link>

    );

    return (
        <div className="overlay" style={{
            visibility: isVisible ? 'visible' : 'hidden',
            opacity: 0, // Start with the overlay being invisible
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#1D1D20',
            zIndex: 1000
        }}>
            <div className='overlay_links-container' ref={linksContainerRef}> {/* Reference the container for GSAP targeting */}
                <OverlayLink href="/">HOME</OverlayLink>
                <OverlayLink href="/about">ABOUT</OverlayLink>
                <OverlayLink href="#services">SERVICES</OverlayLink>
                <OverlayLink href="#contact">CONTACT</OverlayLink>
                <OverlayLink href="/FAQ">FAQ</OverlayLink>
            </div>
            <button className='overlay_close' onClick={onClose}><AiOutlineClose /></button>
            <div className='overlay_right-container'>
                <div className='overlay_icons'>
                    <Link href='/'>
                        <CiFacebook style={{ fontSize: 40 }} />
                    </Link>
                    <Link href='/'>
                        <CiInstagram style={{ fontSize: 40 }} />
                    </Link>
                </div>
                <Image src='/images/Logo3.svg' height={30} width={150} alt='logo3' />

                <p className='roboto-light'>Nicholas Georgakis</p>
                <a className='roboto-light' href="mailto:info@grindcrete.com.au?subject=Grincrete%Enquiry">info@grindcrete.com.au</a>
                <a className='roboto-light' href="tel:+1234567890">Call Us: 04 *** ***</a>
                <p className='roboto-light'>Melbourne, Aus.</p>

            </div>
        </div>
    );
};

export default Overlay;
