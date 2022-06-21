import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="nullpi__navbar">
            <div className="nullpi__navbar-links">
                <div className="nullpi__navbar-links_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nullpi__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#nullpi">What is Null Pi?</a></p>
                    <p><a href="#about">About</a></p>
                    <p><a href="#skills">Skills</a></p>
                    <p><a href="#projects">Projects</a></p>
                </div>
            </div>
            <div className="nullpi__navbar-contact">
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "#contact"
                }}>Contact</button>
            </div>
            <div className="nullpi__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="nullpi__navbar-menu_container scale-up-center">
                        <div className="nullpi__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#nullpi">What is Null Pi?</a></p>
                            <p><a href="#about">About</a></p>
                            <p><a href="#skills">Skills</a></p>
                            <p><a href="#projects">Projects</a></p>
                        </div>
                        <div className="nullpi__navbar-menu_container-links-contact">
                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "#contact"
                            }}>Contact</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;