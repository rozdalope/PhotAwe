import React from 'react';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer';
import './HomePage.css';
import Video from '../../assets//videos/hero01.mp4';

const HomePage = () => {

    return (
        <div>
            <Header />
            <div className='hero-section'>
                <div className='hero-section-title'>
                    <h1>Shot and Sell</h1>
                    <p className='hero-section-description'
                    >Turn your photos into money. Somebody is interested in your photos.
                    </p>
                </div>
                <video autoPlay loop muted className='video'>
                    <source src={Video} type='video/mp4' />
                </video>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;