import React, { useEffect } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import Header from "./Header";
import Fade from 'react-reveal/Fade';
import Spinner from "./Spinner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "./Footer";

function Home(props) {
  
  useEffect(() => {
    document.title = "Aesthetics Marble World Ltd.";
}, [])

const findSrc = (id) => {
   return props.banners && props.banners.docs.find(doc => doc.id === id).data().files.src
};


  return (
    <div className="home">
    <Header />
    {props.banners ? <Fade   >
       <div class="row"></div>
      <div className="sectionOne" style={{backgroundImage: `url(${findSrc("AD2oNtsYmyo8yaT0SvQn")})`}}>
      <div className="overlay">
        </div>
        <div>
          <div>
       
            <h1>15 YEARS OF EXPERIENCE IN THE INDUSTRY</h1>
            <div>
              <p>
                We are Aesthetics Marble World Ltd, a construction company based
                in Nigeria. We specialize in the supply & installation of   Marble and other Natural stones procured from all over the world.
              </p>
            </div>

            <Link to="/resource"><button class="buttton learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">MORE DETAILS</span>
          </button></Link>
          </div>
        </div>
      </div>
      </Fade> : <div></div>}

    
      <div className="sectionTwo">
      <Fade left  >
        <div className="sectionTwo__left">
          <div>
            <h3>WHO WE ARE</h3>
            <h1>About Aesthetics Marble World</h1>

            <p>
              Our company has been in existence for over 15 years, registered
              and incorporated under the Nigerian Corporate Affairs Commision.
            </p>
            <p>
              We believe in the value of giving good services beyond our client
              expectations and we aim to achieve highest standard at all time.
            </p>
            <Link to="/about"><button className="btn draw-border">Learn More</button></Link>
            
          </div>
        </div>
        </Fade>

       { props.banners ?  <Fade right  >
        <div className="sectionTwo__right" style={{backgroundImage: `url(${findSrc("YLHiruotmnMMKw70MpIk")})`}}></div>
        </Fade> : <div></div>}
      </div>

      
      <div className="sectionThree" style={{backgroundImage: `url(${findSrc("ouRFIsKsgF8FqftHFa9n")})`}}>
        <div className="overlay">
        </div>
        <div className="content">
        <div className="heading">
            <h1>OUR WORKS</h1>
            <p>
              We have built
              a reputation for the highest quality of professional services nationwide. <Link to="/projects">View more</Link>
            </p>
          </div>
          <Fade top  >
          <SRLWrapper>
          <div className="galleries">
          <div className="carousel">
          <Carousel className="carous" showThumbs={false}  autoPlay={true} showIndicators showStatus={false} infiniteLoop centerMode >
          {
            props.homeGallery && props.homeGallery.docs.map((doc, index) => (
              <div key={index}>
              <img src={doc.data().files.src } alt={doc.data().name}/>
              <p className="legend">{doc.data().name}</p>
          </div>
            ))
          }
          
      </Carousel>
          </div>
  
          </div>
         </SRLWrapper>
         </Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
