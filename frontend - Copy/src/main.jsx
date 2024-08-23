import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import HomePage from './landing_page/home/HomePage.jsx'
import SignUp from './landing_page/signup/SignUp.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NotFound.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/pricing' element={<PricingPage/>} />
      <Route path='/product' element={<ProductPage/>}></Route>
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>  {/* ya che kam not found cha msg display karaycha*/ }
    </Routes>
    <Footer/>
  </BrowserRouter>
)
