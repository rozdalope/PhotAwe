import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { DELETE } from '../redux/action';
import { MdDelete } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import whitelogo from '../assets/images/logo-white.png';
import './Header.css';
import '../styles/Hero.css';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import { IoIosBriefcase } from 'react-icons/io';



const Header = () => {

    // cart add in album
    const getData = useSelector(state => state.cart);
    console.log(getData);

    // delete item
    const dispatch = useDispatch();
    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: { item: id } });
    }

    const [showCart, setShowCart] = useState(false);

    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    // total price
    const [price, setPrice] = useState(0);
    console.log(price);

    const sum = () => {
        // let price = 0;
        let price = getData.map((items, index) => {
            return Number(items.item.price)
        }).reduce((accum, current) => { return accum + current; }, 0)

        // let price = getData.reduce((accum, current) => {
        //     return accum + current.item.price;
        // }, 0);

        console.log(price);
        setPrice(price);
    }

    useEffect(() => {
        sum()
    }, [getData])


    return (
        <nav className='nav-header'>
            <div className='nav-header-left'>
                <Link
                    to='/'>
                    <img
                        className='header-logo'
                        src={whitelogo}
                        alt='PhotAwe'>
                    </img>
                </Link>
                <Link
                    to='/gallery'
                    className='gr-icon'>
                    <Button
                        variant="outline-light"
                        className='btn-icon'
                    >Gallery
                    </Button>
                </Link>
            </div>
            <div className='nav-header-right'>
                <ul className='headerStyles'>
                    <li>
                        <Button
                            className='btn-icon'
                            variant="outline-light"
                            onClick={() => {
                                setShowCart(!showCart)
                            }}>
                            <IoIosBriefcase className='react-Icons' />
                            <span>({getData.length})</span>
                        </Button>
                        {showCart && < div className='cart-container'>
                            {getData.length ? (
                                <section className='details'>
                                    <div className='details-title-cart'>
                                        <h4>In your album</h4>
                                    </div>
                                    {getData.map((items) => (
                                        <div className='details-content'>
                                            <div className='details-content-img'>
                                                <Link
                                                    to={`/cart/${items.item.title}`}>
                                                    <img
                                                        className='cart-img'
                                                        src={items.item.cover}
                                                        alt='' />
                                                </Link>
                                            </div>
                                            <div className='details-content-detail'>
                                                <div className='details_content_detail_price'>
                                                    <p className='item-title'>{items.item.title.slice(0, 20)}...</p>
                                                    <p>Price: Php {items.item.price}</p>
                                                </div>
                                            </div>
                                            <div className='details-content-detail-icon'>
                                                <button
                                                    className='details-content-delete-icon'
                                                    onClick={() => {
                                                        remove(items.item.id)
                                                        console.log(getData)
                                                    }}>
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <div className='details-total-checkout'>
                                        <div className='details-total'>
                                            <h4>Total: Php {price}</h4>
                                            <button className='button btn-checkout'>Checkout</button>
                                        </div>
                                    </div>
                                </section>
                            ) : (
                                <div className='empty'>
                                    <p>Your album is empty</p>
                                    <p className='cart-icon' ><IoIosBriefcase /></p>
                                </div>
                            )}
                        </div>}
                    </li>
                    <li>
                        <Button
                            className='btn-icon'
                            variant='outline-light' onClick={() => {
                                setLoginOpen(true);
                            }}>Log in</Button>
                        {loginOpen &&
                            <LoginPage
                                setLoginOpenProps={() => setLoginOpen(false)} />}
                    </li>
                    <li>
                        <Button
                            className='btn-icon'
                            variant="outline-light"
                            onClick={() => {
                                setSignupOpen(true);
                            }}>Sell Your Photo</Button>
                        {signupOpen && <SignupPage setSignupOpenProps={() => setSignupOpen(false)} />}
                    </li>
                </ul>
            </div>
        </nav >
    )
}

const mapStateToProps = (state) => {
    return {
        amount: state.amount,
    }
}
connect(mapStateToProps)(Header);

export default Header;