import { useState } from 'react';
import { photos } from '../../../assets/data/data';
import SearchItems from './SearchItems';
import { BiSearch } from 'react-icons/bi';
const Hero = () => {

    const [value, setValue] = useState('');

    const onChangeResult = (event) => {
        setValue(event.target.value);
    }

    const onSearchPhoto = (key) => {
        setValue(key)
        console.log('search', key);
    }
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <h1>
                        <label>
                            <span>Digital marketplace</span> for photographers.
                        </label>
                    </h1>
                    <p>Sell and collect unique photos from professional photographers and creators all over the world.</p>
                    <div className='search'>
                        <input
                            className='hero-search-inp'
                            type='text'
                            placeholder='Search Photo...'
                            onChange={onChangeResult}
                            value={value} />
                        <button
                            className='search-icon'
                            onClick={() => onSearchPhoto(value)}>
                            <BiSearch />
                        </button>
                    </div>
                    <p className='search-sample'>Examples: Wedding, Vintage-themed, Sunset, Orion...</p>
                    <SearchItems photos={photos} value={value} onSearch={onSearchPhoto} />
                </div>
            </section>
        </>
    )
}

export default Hero;