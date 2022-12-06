import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../../../redux/action';
import { BsBriefcaseFill, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { FiZoomIn } from 'react-icons/fi';
import '../../../styles/PhotoItemsStyles.css';
import { IoIosCloseCircle } from "react-icons/io";

const PhotoItems = ({ data }) => {

    // the image will open when the zoom-in icon is clicked
    const [openImage, setOpenImage] = useState(false);
    const [img, setImg] = useState('');

    const cart = useSelector(state => state.cart);


    const onOpenImage = (src) => {
        setImg(src)
        setOpenImage(true);
    }

    const dispatch = useDispatch();

    const addToCart = (e) => {
        if (cart.find(cartItem => cartItem.item.id === e.id)) {
            return;
        }

        dispatch(ADD(e));
    }

    return (
        <>
            <section className='section d-flex'>
                <div className='photo-items'>{data.map((items) => (
                    <div className='box' key={items.id}>
                        {/* {console.log('ito mga img', items.cover)}
                        <img src={items.cover} /> */}
                        <div className='img'>
                            <img src={items.cover} alt='' />
                            <div className='overlay'>
                                <button
                                    className='button icon'
                                    onClick={() => addToCart(items)}
                                >
                                    <BsBriefcaseFill />
                                </button>
                                <button
                                    className='button icon'>
                                    <BsFillBookmarkHeartFill />
                                </button>
                                <button
                                    className='button icon'
                                    onClick={() => onOpenImage((items.cover))}>
                                    <FiZoomIn />
                                </button>
                            </div>
                        </div>
                        <div className='details'>
                            <h3>{items.title}</h3>
                            <p>{items.author}</p>
                            <h4>Price : Php{items.price}</h4>
                        </div>
                    </div>
                ))}
                </div>
            </section>
            {/* modal of the image opens when */}
            <div className={openImage ? 'modelOpen' : 'modelClose'}>
                <div className='onClickImage'>
                    <img src={img} alt='' />
                    <button className='button' onClick={() => setOpenImage(false)}>
                        <IoIosCloseCircle />
                    </button>
                </div>
            </div>
        </>
    )
}

export default PhotoItems;