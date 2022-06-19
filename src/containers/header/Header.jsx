import React from 'react';
import logo from '../../assets/nullpi.png';
import './Header.css';

const Header = () => (
    <div className="nullpi__header section__padding" id="home">
        <div className="nullpi__header-content">
            <h1 className="gradient__text">Welcome To Null Pi</h1>
            <h2 className="gradient__text">[Web Development][Mobile App Development]</h2>
            <h2 className="gradient__text">[Software Development][Game Development]</h2>

            <div className="nullpi__header-content__text">
                <p>Using inspiration to power unique projects in technology.</p>
                <p>Contact to inquire about projects.</p>
            </div>
        </div>

        <div className="nullpi__header-image">
            <img src={logo}  alt=""/>
        </div>
    </div>
);

export default Header;