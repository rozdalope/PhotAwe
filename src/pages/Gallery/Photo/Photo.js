import '../../../styles/PhotoStyles.css';

// import Hook
import { useState } from 'react';

// import components
import Heading from '../../../components/Heading';

// import assets
import PhotoItems from './PhotoItems';

import { photos } from '../../../assets/data/data';


const Photo = () => {
    const [data, setData] = useState(photos);
    console.log(setData);

    return (
        <>
            <section className='photo'>
                <div className='container'>
                    <Heading
                        title='Explore Photography'
                        desc='Check the latest and exclusive collections from our contributors.' />
                </div>

                <PhotoItems data={data} />
            </section>
        </>
    );
}

export default Photo;
