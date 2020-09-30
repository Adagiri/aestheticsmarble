import React, { useEffect } from 'react';
import "./Services.scss";
import Header from './Header';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';

function Services(props) {

    useEffect(() => {
        document.title = "Services - Aesthetics Marble World"
        // return () => {
        //     cleanup
        // }
    }, [])


    const findSrc = (id) => {
        return props.banners && props.banners.docs.find(doc => doc.id === id).data().files.src
     };

    return (
        <div className="services ">
        <Header />
        <Fade left>
        <div className="head"  style={{backgroundImage: `url(${findSrc("Vk57ApFzsXw9pFWoErQm")})`}}>
        <h1>Services</h1>
        <p>OUR CORE COMPETENCE</p>
      </div>
      </Fade>

      <Fade left>
            <div className="list">
            <ul>
            {
                props.lists && props.lists.docs.find(doc => doc.id === "4rpI5ij5o93IDWPVT4sf").data().item.map(list => <li>{list}</li>)
              }
            </ul>
            </div>
            </Fade>
            <Footer />
        </div>
    )
}

export default Services
