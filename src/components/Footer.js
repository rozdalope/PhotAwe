import React from 'react';
import './Footer.css';
import whitelogo from '../assets/images/logo-white.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-container'>
                    <div className='footer-container-about'>
                        <div className='footer-col'>
                            <img className='footer-logo' src={whitelogo} alt='logo' />
                            <p>Subscribe and get the latest updates on our marketplace. Get the exclusive and recently uploaded photos. add it to your collections, or submit your contributions!</p>
                        </div>
                        <div className='footer-col'>
                            <h3>For Brands</h3>
                            <a href='#'>Image Licensing</a><br />
                            <a href='#'>Pricing and Licensing Types</a><br />
                            <a href='#'>Need help?</a><br />
                        </div>
                        <div className='footer-col'>
                            <h3>For Contributors</h3>
                            <a href='#'>Join as a contributor</a><br />
                            <a href='#'>Sell your work</a><br />
                            <a href='#'>Get booked for shoots</a><br />
                            <a href='#'>PhotAwe Awards</a><br />
                            <a href='#'>Need help?</a><br />
                        </div>
                        <div className='footer-col'>
                            <h3>About</h3>
                            <a href='#'>Our story</a><br />
                            <a href='#'>Work with us</a><br />
                            <a href='#'>FAQ</a><br />
                            <a href='#'>Privacy</a><br />
                            <a href='#'>Terms of Service</a>
                        </div>
                    </div>
                    <div className='footer-copyright'>
                        <div className='copyright'>
                            <p></p>
                            <p>&copy; 2022 - PhotAwe by <a href='#' target='_blank'>Roz Dalope</a> | All Rights Reserved </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;