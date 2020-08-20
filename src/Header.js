import React from 'react';
import "./Header.scss";
import Logo from "./Logo.png";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
        <div >
        <img className="header__logo" src={Logo} alt="Aesthetics Marble World" />
        </div>
        <div className="header__navs">
        <Link to="/">HOME</Link>
        <Link to="/about">COMPANY</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/contact">CONTACT</Link>
        </div>
        </div>
    )
}

export default Header
