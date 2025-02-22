import React from 'react';
import { Link } from 'react-router-dom';
import bmelogo from './images/uwbmesoc-logo.png';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
        <div classname="header-logo">
            <img src={bmelogo} alt="UW BME Society Logo" className='logo'/>
        </div>
        <nav className="navbar">
            <Link to="/home">Home</Link> 
            <Link to="/about">About Us</Link> 
            <Link to="/events">Events</Link> 
            <Link to="/contact">Contact Us</Link>
        </nav>
    </header>
  );
};

export default Header;
