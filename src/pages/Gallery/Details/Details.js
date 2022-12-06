import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useState } from 'react';

const Details = () => {

    const [data, setData] = useState([]);
    const getData = useSelector((state) => state.reducer.cart);
    const { id } = useParams();

    const compare = () => {
        let compareData = getData.filter((e) => {
            return e.id == id;
        })
        setData(compareData);
    }

    useEffect(() => {
        compare();
    })
    return (
        <>
            <article>
                <section className='details'>
                    <h2 className='details-title'>About this photo</h2>
                    {data.map((item) => {
                        <div className='details-content'>
                            <div className='details-content-img'>
                                <img src={item.cover} alt={item.title} />
                            </div>
                            <div className='details-content-detail'>
                                <h1>{item.title}</h1>
                                <h3>Php{item.price}</h3>
                                <p>{item.author}</p>
                                <div className='add-to-cart-container'>
                                    <button className='button'>Add to Album</button>
                                </div>
                                <div className='desc'>
                                    <h4>Photo Description</h4>
                                    <p>Ph</p>
                                </div>
                            </div>
                        </div>
                    })}
                </section>
            </article>
        </>
    )
}

export default Details;