import React, { useState } from 'react';
import { recentlyUploaded } from '../../../assets/data/data';
import Heading from '../../../components/Heading';
import PhotoItems from '../Photo/PhotoItems';
import '../../../styles/RecentlyUploadedStyles.css';

const RecentlyUploaded = () => {

    const [data, setData] = useState(recentlyUploaded);
    const allCategories = ['all', ...new Set(data.map((item) => item.category))];

    const [category, setCategory] = useState(allCategories);

    // filter by category
    const handleFilter = (category) => {
        const newItem = recentlyUploaded.filter((item) => item.category === category)
        setData(newItem)

        if (category === 'all') {
            setData(recentlyUploaded)
            return
        }
    }

    return (
        <>
            <section className='recently-uploaded'>
                <div className='container'>
                    <div className='head'>
                        <Heading
                            title='Recently Uploaded'
                            desc='Check our latest photos in the marketplace' />
                        <div className='category'>
                            {/* map all the categories of the new photos */}
                            {category.map((category) => {
                                <button
                                    className='button'
                                    onClick={() => handleFilter(category)}>
                                    {category}
                                </button>
                            })}
                        </div>
                    </div>
                    <PhotoItems data={data} />
                </div>

            </section>
        </>
    )
}

export default RecentlyUploaded;