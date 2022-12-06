import React from 'react';

// Router
import { Routes, Route } from 'react-router';
import HomePage from './pages//Home/HomePage';
import GalleryPage from './pages/Gallery/GalleryPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SellYourPhoto from './pages/SellYourPhoto';
import Details from './pages/Gallery/Details/Details';

const App = () => {
  return (
    <main>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        {/* <Route path='/cart' element={<CartPage />} /> */}
        <Route path='/cart/:id' element={<Details />} />
        <Route path='/log-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path='/sell-your-photo' element={<SellYourPhoto />} />
      </Routes>


    </main>
  )
}

export default App;