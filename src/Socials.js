/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Socials.scss";
import Facebook from "./assets/Facebook.svg";
import Instagram from "./assets/Instagram.svg";
import Mail from "./assets/Mail.svg";

function Socials() {
  return (
    <div class="btn_wrap">
      <span class="span">SEND A MESSAGE</span>
      <div class="container">
        <a target="_blank" href="https://web.facebook.com/Aesthetics-Marble-World-2055308017872067/">
          <img src={Facebook} className="i" alt="aesthetics marble world" />
        </a>

        <a href="mailto:aestheticsmarbleworldltd@gmail.com" target="_blank" >
          <img src={Mail} className="i" alt="aesthetics marble world" />
        </a>

        <a href="https://www.instagram.com/aestheticsmarbleworld/" target="_blank">
          <img src={Instagram} className="i" alt="aesthetics marble world" />
        </a>
      </div>
    </div>
  );
}

export default Socials;
