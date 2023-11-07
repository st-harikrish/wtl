import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"; 
import LoginPage from "./LoginPage";
// import ClientSection from "./ClientSection";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li><a href="/LoginPage">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;