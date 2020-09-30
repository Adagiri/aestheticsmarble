import React, { useEffect } from "react";
import "./Resource.scss";
import Header from "./Header";
import Fade from 'react-reveal/Fade';


import { SRLWrapper } from "simple-react-lightbox";
import Footer from "./Footer";

const options = {
  buttons: {
    iconPadding: '7px',
    iconColor: 'rgba(179, 175, 143, 0.8)'
  },
  caption: {
    captionFontFamily: 'Montserrat, sans-serif',
    captionFontSize: '22px',
    captionColor: '#8D99AE',
    captionFontWeight: 300,
    showCaption: true
  },
  settings: {
    overlayColor: 'rgba(43, 45, 66, 0.95)',
    transitionTimingFunction: 'ease-in-out',
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
    slideAnimationType: 'slide',
    enablePanzoom: false,
    autoplaySpeed: 5000,
    hideControlsAfter: false
  },
  progressBar: {
    height: '3px',
    fillColor: '#8D99AE',
    backgroundColor: 'rgba(43, 45, 66, 0.95)'
  },
  thumbnails: {
    thumbnailsSize: ['150px', '100px'],
    thumbnailsGap: '0 5px'
  }
};

function Resource(props) {

  useEffect(() => {
    document.title = "Resources - Aesthetics Marble World"
    // return () => {
    //     cleanup
    // }
}, [])

  const findSrc = (id) => {
    return props.banners && props.banners.docs.find(doc => doc.id === id).data().files.src
 };

 const fetchFile = (id) => {
  return props.resource && props.resource.docs.find(doc => doc.id === id).data()
};

  return (
    <div className="resource ">
      <Header />
      <Fade left>
      <div className="top" style={{backgroundImage: `url(${findSrc("CONOr6STFiYso4PFkm0j")})`}}>
      <h1>Resources</h1>
      <p>All your resources</p>
      </div>

      </Fade>

      <Fade left>
  
      <div className="main">
        <h2>MARBLE</h2>
        <p>Marble is one of the most widely used materials in construction</p>
        <span> Click image to view types</span>
        <div className="resources">
          <SRLWrapper options={options}>
            <a href={ fetchFile("KDFTt4xlrCUAFAxevNjg").gallery[0].url.src} data-attribute="SRL">
              <img className="gallery__image" src={ fetchFile("KDFTt4xlrCUAFAxevNjg").gallery[0].url.src} alt={fetchFile("KDFTt4xlrCUAFAxevNjg").gallery[0].name}  />
            </a>
            <div className="hidden">
            {
              props.resource && fetchFile("KDFTt4xlrCUAFAxevNjg").gallery.slice(1).map((doc, index) => <a key={index} href={ doc.url.src } data-attribute="SRL">
              <img className="gallery__image" src={ doc.url.src } alt={ doc.name} />
            </a>)
            }
            </div>
          </SRLWrapper>
        </div>

        <h2>QUARTZ</h2>
        <p>Quartz is one of the most widely used materials in construction</p>
        <span> Click image to view types</span>
        <div className="resources">
          <SRLWrapper options={options}>
            <a href={ fetchFile("JSFhgFxDBKSEyUMbWrsC").gallery[0].url.src} data-attribute="SRL">
              <img className="gallery__image" src={ fetchFile("JSFhgFxDBKSEyUMbWrsC").gallery[0].url.src} alt={fetchFile("JSFhgFxDBKSEyUMbWrsC").gallery[0].name}  />
            </a>
            <div className="hidden">
            {
              props.resource && fetchFile("JSFhgFxDBKSEyUMbWrsC").gallery.slice(1).map((doc, index) => <a key={index} href={ doc.url.src } data-attribute="SRL">
              <img className="gallery__image" src={ doc.url.src } alt={ doc.name} />
            </a>)
            }
            </div>
          </SRLWrapper>
        </div>

        <h2>SLATE</h2>
        <p>Slate is one of the most widely used materials in construction</p>
        <span> Click image to view types</span>
        <div className="resources">
          <SRLWrapper options={options}>
            <a href={ fetchFile("iX2qhtAVfi1dPKofYq7p").gallery[0].url.src} data-attribute="SRL">
              <img className="gallery__image" src={ fetchFile("iX2qhtAVfi1dPKofYq7p").gallery[0].url.src} alt={fetchFile("iX2qhtAVfi1dPKofYq7p").gallery[0].name}  />
            </a>
            <div className="hidden">
            {
              props.resource && fetchFile("iX2qhtAVfi1dPKofYq7p").gallery.slice(1).map((doc, index) => <a key={index} href={ doc.url.src } data-attribute="SRL">
              <img className="gallery__image" src={ doc.url.src } alt={ doc.name} />
            </a>)
            }
            </div>
          </SRLWrapper>
        </div>


        <h2>GRANITE</h2>
        <p>Granite is one of the most widely used materials in construction</p>
        <span> Click image to view types</span>
        <div className="resources">
        <SRLWrapper options={options}>
          <a href={ fetchFile("6HcMSTpZaKRfmmvFfRbW").gallery[0].url.src} data-attribute="SRL">
            <img className="gallery__image" src={ fetchFile("6HcMSTpZaKRfmmvFfRbW").gallery[0].url.src} alt={fetchFile("6HcMSTpZaKRfmmvFfRbW").gallery[0].name}  />
          </a>
          <div className="hidden">
          {
            props.resource && fetchFile("6HcMSTpZaKRfmmvFfRbW").gallery.slice(1).map((doc, index) => <a key={index} href={ doc.url.src } data-attribute="SRL">
            <img className="gallery__image" src={ doc.url.src } alt={ doc.name} />
          </a>)
          }
          </div>
        </SRLWrapper>
      </div>


        <h2>SANDSTONE</h2>
        <p>
          Sandstone is one of the most widely used materials in construction
        </p>
        <span> Click image to view types</span>
        <div className="resources">
        <SRLWrapper options={options}>
          <a href={ fetchFile("LlKuGJG7q0Pwgte1s3RV").gallery[0].url.src} data-attribute="SRL">
            <img className="gallery__image" src={ fetchFile("LlKuGJG7q0Pwgte1s3RV").gallery[0].url.src} alt={fetchFile("LlKuGJG7q0Pwgte1s3RV").gallery[0].name}  />
          </a>
          <div className="hidden">
          {
            props.resource && fetchFile("LlKuGJG7q0Pwgte1s3RV").gallery.slice(1).map((doc, index) => <a key={index} href={ doc.url.src } data-attribute="SRL">
            <img className="gallery__image" src={ doc.url.src } alt={ doc.name} />
          </a>)
          }
          </div>
        </SRLWrapper>
      </div>

        <h2>ONYX</h2>
        <p>Onyx is one of the most widely used materials in construction</p>
        <span> Click image to view types</span>
        <div className="resources">
        <SRLWrapper options={options}>
          <a href={ fetchFile("bd6ViKjYEm3XUXx9wZhc").gallery[0].url.src} data-attribute="SRL">
            <img className="gallery__image" src={ fetchFile("bd6ViKjYEm3XUXx9wZhc").gallery[0].url.src} alt={fetchFile("bd6ViKjYEm3XUXx9wZhc").gallery[0].name}  />
          </a>
          <div className="hidden">
          {
            props.resource && fetchFile("bd6ViKjYEm3XUXx9wZhc").gallery.slice(1).map((doc, index) => <a key={index} href={ doc.url.src } data-attribute="SRL">
            <img className="gallery__image" src={ doc.url.src } alt={ doc.name} />
          </a>)
          }
          </div>
        </SRLWrapper>
      </div>
      </div>
      </Fade>
      <Footer />
    </div>
  );
}

export default Resource;
