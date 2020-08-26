import React, {useState} from 'react';
import "./Toggle.scss";

function Toggle() {

    // const [toggle, setToggle] = useState(false);


    return (
        <div className="toggle">
        <a href="#menu" id="toggle" 
        className="on" ><span></span></a>

        <div id="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        </div>
    )
}

export default Toggle
