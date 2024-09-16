import {Footer} from "../../Constants/Footer";
import './style.css'
export function Contact(){


    return(
        <>
            <div className="container">
                <h3 className='my-5'><span className='fw-lighter'>Home/</span>Contact</h3>
                <div className='row'>
                    <div className='col-md-4 mb-5'>
                        <div className='border border-secondary-subtle rounded p-3 my-5'>
                            <div className='contact'>
                                <div className='d-flex logo'>
                                    <i className="fa-solid fa-phone bg-danger "></i>
                                    <h3 className='ps-3'>Call To Us</h3>
                                </div>
                                <h5>We are available 24/7, 7 days a week.</h5>
                                <h5>Phone: +8801611112222</h5>
                                <br/>
                                <hr/>
                                <div className='d-flex logo'>
                                    <i className="fa-regular fa-envelope bg-danger"></i>
                                    <h3 className='ps-3'>Write To US</h3>
                                </div>
                                <h5>Fill out our form and we will contact you within 24 hours.</h5>
                                <h5>Emails: customer@exclusive.com</h5>
                                <h5>Emails: support@exclusive.com</h5>
                                <br/>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-7 offset-1 mb-5'>
                        <div className='border border-secondary-subtle rounded p-3 my-5'>
                            <div className='container contact d-flex justify-content-between'>
                                <input type='text' placeholder='Your Name*' name='name' className='form-control w-25'/>
                                <input type='email' placeholder='Your Email*' name='email'
                                       className='form-control w-25'/>
                                <input type='text' placeholder='Your Phone*' name='phone'
                                       className='form-control w-25'/>
                            </div>
                            <textarea placeholder='Your Message*' rows='10' name='message' className='form-control w-100'/>
                            <div className='contact'>
                            <button type='submit' className='btn ms-auto'>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer/>
        </>
    )
}