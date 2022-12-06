import React from 'react';
import { useState } from 'react';
import '../../../styles/SearchItemsStyles.css';
import { BsBriefcaseFill, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { FiZoomIn } from 'react-icons/fi';


const SearchItems = ({ value, photos }) => {

    return (
        <>
            <section className='searchItems'>
                <div className='photo_items'>
                    {/* search functions*/}
                    {photos.filter((items) => {
                        const searchKey = value.toLowerCase();
                        const title = items.title.toLowerCase();

                        return searchKey && title.includes(searchKey) && title !== searchKey;
                    }).slice(0, 10).map((items) =>
                        <div className='box' key={items.id}>
                            <div className='img'>
                                <img src={items.cover} alt='' />
                                <div className='overlay'>
                                    <button
                                        className='button icon'>
                                        <BsBriefcaseFill />
                                    </button>
                                    <button
                                        className='button icon'>
                                        <BsFillBookmarkHeartFill />
                                    </button>
                                    <button
                                        className='button icon'>
                                        <FiZoomIn />
                                    </button>
                                </div>
                            </div>
                            <div className='details'>
                                <h3>{items.title}</h3>
                                <p>{items.author}</p>
                                <h4>Price : Php{items.price}</h4>
                            </div>
                        </div>)}
                </div>
            </section>
        </>
    )
}

export default SearchItems;