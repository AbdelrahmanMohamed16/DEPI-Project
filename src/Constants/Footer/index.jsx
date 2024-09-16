import './style.css'
import React from 'react';
export function Footer(){


    return(
        <>
            <footer className="footer bg-dark">
                <div className="container">
                    <div className="row">
                        <div className='col-md-3'>
                            <div className='my-5 mx-3 position-relative'>
                                <h3>Exclusive</h3>
                                <h5>Subscribe</h5>
                                <h5>Get 10% off your first order</h5>
                                <input className='form-control w-100 mt-3 bg-dark text-light p-3 ' type='email' name='email'
                                       placeholder='Enter your email'/>
                                <i className="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='my-5 mx-3'>
                                <h3>Support</h3>
                                <h5>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h5>
                                <h5>exclusive@gmail.com</h5>
                                <h5>+88015-88888-9999</h5>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='my-5 mx-3'>
                                <h3>Account</h3>
                                <h5>My Account</h5>
                                <h5>Login / Register</h5>
                                <h5>Cart</h5>
                                <h5>Wishlist</h5>
                                <h5>Shop</h5>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='my-5 mx-3'>
                                <h3>Quick Link</h3>
                                <h5>Privacy Policy</h5>
                                <h5>Terms Of Use</h5>
                                <h5>FAQ</h5>
                                <h5>Contact</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}