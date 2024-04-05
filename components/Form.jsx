import Image from 'next/image'
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs'

const Form = () => {
    return (
        <section className='form_section'>
            <div className='form_image1'>
                <Image src='/images/diamondgreygrey.svg' alt='diamondgreygrey' layout='fill' />
            </div>
            <div className='form_image2'>
                <Image src='/images/diamondbluegrey.svg' alt='diamondbluegrey' layout='fill' />
            </div>
            <div className='form_content-container'>
                <h3 className='inter-bold'><BsArrowDownRight />REQUEST A QUOTE</h3>
                <div className='form_container'>
                    <form id="quote-form" class="quote-form">
                        <div className='quote_form-fields'>
                            <div class="input-group">
                                <input type="text" id="name" name="name" placeholder="Name" required />
                                <input type="email" id="email" name="email" placeholder="email" required />
                            </div>
                            <div class="input-group">
                                <input type="tel" id="phone" name="phone" placeholder="Phone" required />
                                <input type="number" id="square-metres" name="square_metres" placeholder="Square Meters" required />
                            </div>
                            <div class="input-group">
                                <select id="desired-service" name="desired_service" required>
                                    <option value="">Desired Service</option>
                                    <option value="service1">Service 1</option>
                                    <option value="service2">Service 2</option>
                                    {/* <!-- Additional options here --> */}
                                </select>
                                <input type="date" id="preferred-date" name="preferred_date" required />
                            </div>
                        </div>
                        <div class="submit-container">
                            <button type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form