import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiFacebook, CiInstagram } from "react-icons/ci";
import Footerlegal from './Footerlegal';

const Footer = () => {
    return (
        <footer id='contact'>
            <div className='footer_content-container'>
                <div className='footer_column'>
                    <Image src='images/logo2.svg' alt='Grindcrete Logo' height={60} width={100} quality={100} />
                </div>
                <div className='footer_column'>
                    <p className='roboto-light'>Nicholas Georgakis</p>
                    <a className='roboto-light' href="mailto:info@grindcrete.com.au?subject=Grincrete%Enquiry">info@grindcrete.com.au</a>
                    <a className='roboto-light' href="tel:+1234567890">Call Us: 04 *** ***</a>
                    <p className='roboto-light'>Melbourne, Aus.</p>
                </div>
                <div className='footer_column'>
                    <Link className='roboto-light' href='/'>
                        Home.
                    </Link>
                    <Link className='roboto-light' href='/'>
                        About us.
                    </Link>
                    <Link className='roboto-light' href='/'>
                        Request Quote.
                    </Link>
                    <Link className='roboto-light' href='/'>
                        Services.
                    </Link>
                    <Link className='roboto-light' href='/FAQ'>
                        FAQ.
                    </Link>
                    <Link className='roboto-light' href='/'>
                        Terms & Conditions.
                    </Link>
                </div>
                <div className='footer_column'>
                    <Link href='/'>
                        <CiFacebook style={{ fontSize: 40 }} />
                    </Link>
                    <Link href='/'>
                        <CiInstagram style={{ fontSize: 40 }} />
                    </Link>
                </div>
            </div>
            <hr />
            <Footerlegal />
        </footer>
    )
}

export default Footer