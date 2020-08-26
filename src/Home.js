import React, { useEffect } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import GalleryImage from "./assets/homeBanner.jpg";
import Header from "./Header";
import Toggle from "./Toggle";

function Home() {

  useEffect(() => {
    document.title = "Aesthetics Marble World Ltd."
}, [])

  return (
    <div className="home">
    <Header />
      <div class="row"></div>
      <div className="sectionOne">
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

      <div className="sectionTwo">
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
        <div className="sectionTwo__right"></div>
      </div>

      <div className="sectionThree">
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
          <SRLWrapper>
          <div className="galleries">
          
          <a href={ GalleryImage } data-attribute="SRL">
          <img className="image" src={ GalleryImage } alt="Nothing" />
          </a>
          <a href={ GalleryImage } data-attribute="SRL">
          <img className="image" src={ GalleryImage } alt="Nothing" />
          </a>
          <a href={ GalleryImage } data-attribute="SRL">
          <img className="image" src={ GalleryImage } alt="Nothing" />
          </a>
          <a href={ GalleryImage } data-attribute="SRL">
          <img className="image" src={ GalleryImage } alt="Nothing" />
          </a>
          <a href={ GalleryImage } data-attribute="SRL">
          <img className="image" src={ GalleryImage } alt="Nothing" />
          </a>
          <a href={ GalleryImage } data-attribute="SRL">
          <img className="image" src={ GalleryImage } alt="Nothing" />
          </a>
         
          </div>
         </SRLWrapper>
         
        </div>
      </div>
    </div>
  );
}

export default Home;
