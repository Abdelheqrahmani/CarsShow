import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MainImg = () => {
    const navRef = useRef();
  
    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <div className="main-img">
            <header>
                <h3>LOGO</h3>
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/#">My Work</a>
                    <a href="/#">Blog</a>
                    <a href="/#">About Me</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
            <div className="main-img__content">
                <h1>Welcome to Our Showroom</h1>
                <p>Find the car of your dreams!</p>
            </div>
        </div>
    );
};

export default MainImg;