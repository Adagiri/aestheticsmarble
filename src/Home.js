import React from "react";
import Banner from "./assets/homeBanner.jpg";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
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
                in Nigeria. We specialize in the supply & installation of
                quality marble, granite, cultured stone(slabs/tiles), vilified &
                ceramics tiles walls & floor.
              </p>
            </div>

            <button className="button">MORE DETAILS</button>
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
            <button className="button">LEARN MORE</button>
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
          <div className="galleries">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
