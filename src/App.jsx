import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Featured from './component/Featured';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './component/Footer';
import Logos from './component/Logos';
import Latest from './component/Latest';
import ShopOffer from './component/ShopOffer';
import UniqueFeature from './component/UniqueFeature';
import Blog from './component/Blog';
import Contact from './pages/Contact';
import Blogg from './pages/Blogg';
import Shop from './pages/Shop';
import LogIn from './component/LogIn';
import CreateAccount from './component/CreateAccount';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />

      
      <Routes>
       
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Featured />
              <Latest/>
              <ShopOffer/>
              <UniqueFeature/>
              
              <Logos/><Blog/>
              <Footer/> 
              
            </>
          }
        />

        {/* Shop Page */}
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Blog" element={<Blogg/>} />
        <Route path="/LogIn" element={<LogIn/>} />
        <Route path="/CreateAccount" element={<CreateAccount/>} />

        

        {/* Fallback 404 Page */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
