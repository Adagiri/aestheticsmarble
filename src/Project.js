import React, { useEffect} from "react";
import "./Project.scss";
import GalleryImage from "./assets/homeBanner.jpg";

import { SRLWrapper } from "simple-react-lightbox";
import Header from "./Header";

const images = [
  {
    src: { GalleryImage },
    thumbnail: { GalleryImage },
    caption: "Lorem ipsum dolor sit amet",
    width: 1920,
    height: "auto",
  },
  {
    src: { GalleryImage },
    thumbnail: { GalleryImage },
    caption: "Consecutur adiscip elit",
    width: 2000,
    height: "auto",
  },
];

function Project() {

  useEffect(() => {
    document.title = "Projects - Aesthetics Marble World"
    // return () => {
    //     cleanup
    // }
}, [])
  return (
    <div className="project">
    <Header />
      <div className="head">
        <h1>Projects</h1>
        <p>OUR CREDENTIAL PAST AND CURRENT DELIVERIES</p>
      </div>

      <div className="body">
      <SRLWrapper>
       
       <a className="gallery__trigger" href={ GalleryImage } data-attribute="SRL">
       <img src={ GalleryImage } className="view__gallery"  alt="Umbrella" />
      <p>View Gallery</p>
       </a>
        <div className="gallery">
         <a href={ GalleryImage } data-attribute="SRL">
          <img className="gallery__image" src={ GalleryImage } alt="Umbrella" />
        </a>
        <a href={ GalleryImage } data-attribute="SRL">
          <img className="gallery__image" src={ GalleryImage } alt="Whatever" />
        </a>
        </div>
      </SRLWrapper>

      <div className="text">
      <h2>PAST PROJECTS</h2>
        <ul>
          <li>
            Multi project limited (supplies/installation of both indoor wall and
            floor tiles on their various project). Unity Bank headoffice.
          </li>
          <li>
            Baron Architectures (Installation of special screwed tiles at banana
            island project
          </li>
          <li>High point construction</li>
          <li>Vine Estate Ltd.</li>
          <li>Encon International Ltd</li>
          <li>Ponti and Co Italware Construction</li>
          <li>Horation Construction</li>
          <li>CSL Construction</li>
          <li>Feceng Services Ltd</li>
          <li>Locks and Switches</li>
          <li>OPIC Plaza/Event Centre Lagos Ibadan Expressway (Ogun State)</li>
          <li>Turbo Construction</li>
          <li>Cyrons Ventures (Turnkey Builder)</li>
          <li>BCL (Bussiness Contracting Limited)</li>
          <li>
            Numerous Private Residential, e.g Lekki, Banana Island, Parkview,
            Osborne Estate both Lagos and Outside (supplies and installation).
          </li>
        </ul>

        <h2>ONGOING PROJECTS</h2>
        <ul>
          <li>Business contraction Limited (BCL)</li>
          <li>Baron Architectures</li>
          <li>Tender Loving School</li>
          <li>Multi Project Limited</li>
          <li>Turbo Construction</li>
          <li>Feceng Services Limited</li>
          <li>Davonne Investment Limited</li>
          <li>O Spaces Limited</li>
          <li>SPYD Limited</li>
          <li>Catholic Youth Centre</li>
          <li>Banana Island Estate Site</li>
          <li>Banana Island Estate</li>
          <li>Osborne 2 Ikoyi</li>
          <li>Royal Garden Estate Ajah</li>
          <li>Banana Island</li>
          <li>Caltongate, Chevron Drive</li>
          <li>GSL Warehouse Ibadan Oyo State</li>
          <li>Corporate Villa Badore</li>
          <li>Mixed Residential Development</li>
        </ul>
      </div>
        
      </div>
    </div>
  );
}

export default Project;
