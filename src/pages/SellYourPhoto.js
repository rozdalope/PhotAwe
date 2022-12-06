import { useState } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';

import '../styles/SellYourPhotoStyles.css'



const SellYourPhoto = () => {
    // Store
    // const images = useSelector(state => state.uploadedImages);
    // const dispatch = useDispatch();
    // const [imgTitle, setImgTitle] = useState('');
    // const [photoPrice, setPhotoPrice] = useState(0);

    // const [hasError, setHasError] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');

    // const onSubmitFormHandler = (event) => {
    //     event.preventDefault();

    //     if ()
    // }

    return (
        <>
            <Header />
            <div className='add-photo-modal'>
                <div className='add-photo-container'>
                    <div className='side left-side'>
                        <div className='section1'>
                            <div className='icon-container'>
                                <img src='../assets/dots.png' alt='edit' className='icon' />
                            </div>
                        </div>

                        <div className='section2'>
                            <label htmlFor='upload-img' className='upload-img-label'>
                                <div className='upload-img-container'>
                                    <div className='dotted-border'>
                                        <div className='icon-container'>
                                            <img src='../assets/up-arrow.png' alt='upload-img' className='icon' />
                                        </div>
                                        <div>Click to upload</div>
                                        <div>Recommendation: Use high-quality .jpg files less than 20MB</div>
                                    </div>
                                </div>
                            </label>

                            <div className='modals-photo'>
                                <div className='your-image'>
                                    {/* <img src="" alt="your_image"> */}
                                </div>
                            </div>

                        </div>

                        <div className='section3'>
                            <div className='upload-your-photo'>Upload Your Photo</div>
                        </div>
                    </div>

                    <div className='side right-side'>
                        <div className='section1'>
                            <div className='select-size'>
                                <select name='img-size' className='img-size'>
                                    <option value='' disabled selected>Select</option>
                                    <option value='small'>small</option>
                                    <option value='medium'>medium</option>
                                    <option value='large'>large</option>
                                </select>
                                <div className='save-img'>Upload</div>
                            </div>
                        </div>

                        <div className='section2'>
                            <input
                                placeholder='Add your title'
                                type='text'
                                className='new-photo-input photo-title'
                            />
                            <input
                                placeholder='Description about your photo'
                                type='text'
                                className='new-photo-input photo-description'
                            />
                            <input
                                placeholder='Category'
                                type='text'
                                className='new-photo-input photo-category'
                            />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SellYourPhoto;