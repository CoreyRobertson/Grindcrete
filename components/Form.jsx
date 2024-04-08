import Image from 'next/image'
import React, { useState } from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <section className='form_section'>
            <div className='form_image1'>
                <Image src='/images/diamondgreygrey.svg' alt='diamondgreygrey' layout='fill' />
            </div>
            <div className='form_image2'>
                <Image src='/images/diamondbluegrey.svg' alt='diamondbluegrey' layout='fill' />
            </div>
            <div className='form_content-container'>
                <h3 className='inter-bold'>REQUEST A QUOTE</h3>
                <p style={{ fontSize: '18px', color: '#3C71B8' }} className='roboto-bold'>Reach out to us now for an estimate on your home or business flooring needs!</p>
                <p className='roboto-light'>Based in the South East of Melbourne, Grind Crete are able to serve not only the entire CBD and the broader Melbourne metropolitan region but also extend our services to the Mornington Peninsula.</p>
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
                                <DatePicker
                                    className='datepicker'
                                    name='requested date'
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    aria-label="Requested Date"
                                />
                            </div>
                        </div>
                        <div class="submit-container">
                            <button className='form_button' type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form