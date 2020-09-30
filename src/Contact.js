import React, {useEffect} from "react";
import "./Contact.scss";
import Map from "./Map";
import Socials from "./Socials";
import Header from "./Header";
import Footer from "./Footer";


function Contact(props) {
  useEffect(() => {
    document.title = "Contact - Aesthetics Marble World";
    // return () => {
    //     cleanup
    // }
}, [])
  return (
    <div className="contact ">
    <Header /> 
    <div className="map"><Map map={props.map} /></div>

      <div className="main">
      <Socials />
        <h2>Head Office</h2>
          <p>
          Plot 1 Emmanuel Anabor Street Off Mopo Road United Estate Sangotedo.
          Lekki, Lagos.
          </p>
          <p>Tel: 08033769004, 08020677749</p>
          <p>info@aestheticsmarble.com</p>
      </div>
<Footer />
    </div>
  );
}

export default Contact;
