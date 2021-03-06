import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="/">Home</a>
            <a href="/#about-us">About Us</a>
            <a href="/contact-us">Contact Us</a>
        </nav>
        <div>
            Social Media links
        </div>
    </header>
   )

 }

export default Header