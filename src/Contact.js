import React, {useEffect} from "react";
import "./Contact.scss";
import Map from "./Map";
import Socials from "./Socials";
import Header from "./Header";

function Contact() {
  useEffect(() => {
    document.title = "Contact - Aesthetics Marble World"
    // return () => {
    //     cleanup
    // }
}, [])
  return (
    <div className="contact">
    <Header />
      <div className="map">
        <Map />
      </div>
      <div className="main">
      <Socials />
        <h2>Head Office</h2>
          <p>
          <strong>Plot 1 Emmanuel Anabor Street Off Mopo Road United Estate Sangotedo.
          Lekki, Lagos.</strong>
          </p>
          <p><strong>Tel</strong>: 08033769004, 08020677749</p>
          <p><strong>info@aestheticsmarble.com</strong></p>
      </div>
    </div>
  );
}

export default Contact;
