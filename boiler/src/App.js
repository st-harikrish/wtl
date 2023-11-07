import React from 'react';
import Navbar from './components/Navbar.js';
import ClientSection from './components/ClientSection.js';
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage.js"; 
import heroImg from './assets/hero-machine.webp';
import './App.css';
import './App.css';

const clientLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
];
function App() {
  return (
    <>
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element ={<LoginPage />}/>
      </Routes>
      </Router>
      <div className="hero">
        <div className="hero-text">
          <h1>Smaller budgets need smarter dollars</h1>
          <p>Create, manage, and analyze your display, Facebook, Instagram, Pinterest, TikTok, and email campaigns from a single platform. AdRoll helps marketers do more with less.</p>
          <button className='login-button'>Get Started</button>
          <button className='login-button'>Get in Touch</button>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
      <div className='test'>
        <ClientSection clientLogos={clientLogos} />
      </div>

      {/* Other content of your application */}
    </div>
    </>
  );
}

export default App;