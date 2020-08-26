import React, {useState, useEffect} from 'react';
import "./Header.scss";
import Logo from "./Logo4.png";
import { Link } from 'react-router-dom';
import Toggle from './Toggle';

function Header() {

    const [active, setActive] = useState(false);

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        console.log(window.location.pathname.slice(1))
        setActive(window.location.pathname.slice(1))
       
    }, []);

   
    return (
        <div className="header">
       

        <div >
        <img className="header__logo" src={Logo} alt="Aesthetics Marble World" />
        </div>
        <div className="header__navs">
        <Link className={active === "" && "a"} to="/">HOME</Link>
        <Link className={active === "about" && "a"}  to="/about">COMPANY</Link>
        <Link className={active === "projects" && "a"}  to="/projects">PROJECTS</Link>
        <Link className={active === "services" && "a"}  to="/services">SERVICES</Link>
        <Link className={active === "contact" && "a"}  to="/contact">CONTACT</Link>
        </div>

        <div className = "toggle">
        <nav className={`navigation ${toggle && "open"}`}>
        <div className="hamburger" onClick={() => setToggle(!toggle)}>
          <span className="bars"></span>
        </div>
        <div className="menu">
        <Link className={active === "" && "a"} to="/">HOME</Link>
        <Link className={active === "about" && "a"}  to="/about">COMPANY</Link>
        <Link className={active === "projects" && "a"}  to="/projects">PROJECTS</Link>
        <Link className={active === "services" && "a"}  to="/services">SERVICES</Link>
        <Link className={active === "contact" && "a"}  to="/contact">CONTACT</Link>
      
        </div>
      </nav>
        </div>
        </div>
    )
}

export default Header
