import React, { useEffect } from 'react'
import Carousel from './Carousel'
import { BsArrowDownRight } from 'react-icons/bs'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Why = () => {

    useEffect(() => {
        // Ensure GSAP plugins are properly registered
        gsap.registerPlugin(ScrollTrigger);

        // Convert NodeList to Array for easier manipulation
        gsap.utils.toArray('.why_para').forEach(para => {
            // Starting and ending values are explicitly defined
            gsap.fromTo(para,
                { opacity: 0, y: 30 }, // From (starting state)
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: para,
                        start: "top 85%", // Animation starts when top of the element hits 85% of viewport height
                        end: "top 50%", // Adjust if necessary for the ending condition
                        toggleActions: "play none none reverse",
                        // Optionally, use "markers: true" to debug
                    }
                }
            );
        });
    }, []);


    return (
        <section className='why_section'>
            <div className='why_content-container'>
                <h3 className='inter-bold'><BsArrowDownRight />WHY CHOOSE US</h3>
                <p className='roboto-light why_para'>
                    <span>Passion for Perfection:</span> At Grind Crete, transforming concrete into stunning, durable masterpieces is our passion. Our team's dedication ensures that every project reflects exceptional craftsmanship and meticulous attention to detail.

                    <br />
                    <br />
                </p>
                <p className='roboto-light why_para'>
                    <span>Customized for You:</span> Every space is unique, and so are your needs. We offer tailored solutions designed to meet your specific requirements, whether you desire a sleek modern look or a bold, artistic statement. Your vision is our blueprint.
                    <br />
                    <br />
                </p>
                <p className='roboto-light why_para'>
                    <span>Unwavering Quality:</span> Excellence drives us. We use only the best materials and state-of-the-art techniques to guarantee that your concrete surfaces not only meet but exceed your expectations, ensuring longevity and beauty.
                    <br />
                    <br />
                </p>
                <p className='roboto-light why_para'>
                    <span>Precision in Every Detail:</span> We believe the little things make a big difference. Our commitment to precision at every project stage, from consultation to completion, sets us apart, ensuring flawless results and superior customer service.
                    <br />
                    <br />
                </p>
                <p className='roboto-light why_para'>
                    <span>Guaranteed Satisfaction:</span> Your happiness is our success. We're committed to delivering results that delight you, going above and beyond to ensure your experience with Grind Crete is nothing short of exceptional.
                    Choose Grind Crete for concrete solutions where quality, craftsmanship, and your satisfaction are the cornerstones of our business.
                </p>
            </div>
            <Carousel />
        </section>
    )
}

export default Why