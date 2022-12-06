import React from 'react';
// import { banner } from '../../../assets/data/data';
import Register from '../../../assets/images/banner/banner01.png';

const Banner = () => {
    return (
        <>
            <section className='banner'>
                <img className='banner-register' src={Register} alt='Register now' />
                {/* for future implementation */}
                {/* <div className='posts'>
                    {banner.map((items) => (
                        <div
                            className='post'
                            key={items.id}>
                            <div className='content'>
                                <div className='img'>
                                    <img src={items.cover} alt='' />
                                </div>
                                <div className='text'>
                                    <h2>{items.title1}</h2>
                                    <h2>{items.title2}</h2>
                                    <p>{items.desc}</p>
                                    <button className='button book'>BOOK NOW</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
            </section>
        </>
    )
}

export default Banner;