import React from 'react'
import Form from '@/components/Form'
import { BsArrowDownRight } from 'react-icons/bs'
import Head from 'next/head'


const index = () => {
    return (
        <page>
            <Head>
                <title>About us - Grind Crete</title>
                <meta name="description" content="Grind Crete is a Melbourne-based concrete grinding company dedicated to breathing new life into your concrete surfaces. Concrete grinding and finishing across Melbourne." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/images/favicon.ico" />
                <link rel="canonical" href="https://www.grindcrete.com.au/About" />
            </Head>

            <section className='about_section'>
                <div className='why_content-container'>
                    <h3 className='inter-bold'><BsArrowDownRight />ABOUT US</h3>
                    <p className='roboto-light why_para'>
                        <span> Grind Crete is a Melbourne-based concrete grinding company dedicated to breathing new life into your concrete surfaces.</span> Whether your concrete is new, old, damaged, or uneven, our team of skilled and experienced professionals is passionate about transforming it into a smooth, seamless masterpiece that enhances the functionality and aesthetics of your space.
                        <br />
                        <br />
                        <span> We have an unwavering commitment to quality that is infused into every aspect of our work.</span> We invest in state-of-the-art grinding and polishing equipment, ensuring optimal efficiency and precision. Our team is constantly updating their knowledge on the latest technologies and techniques in concrete grinding. This allows us to tackle any project, from basic surface preparation to achieving a high-gloss finish.
                        <br />
                        <br />
                        But quality goes beyond equipment. <span> We believe meticulous attention to detail is paramount.</span> Every project undergoes a thorough inspection as every job is unique.
                        <br />
                        <br />
                        <span>We prioritize clear and open communication. We understand your needs and expectations, and we guarantee you'll be informed through every step of the process.</span> We don't believe in a one-size-fits-all approach – our team of highly skilled grinding professionals are equipped to handle any project need and provide a customized solution for your specific surface.
                        <br />
                        <br />
                        <span>At Grind Crete, our goal is to exceed your expectations and leave you with a concrete surface you'll love. Contact us today for a free quote or consultation, and let's discuss how we can transform your space.</span>
                    </p>
                </div>
            </section>
            <Form />
        </page>
    )
}

export default index