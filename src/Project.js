import React, { useEffect} from "react";
import "./Project.scss";
import Fade from 'react-reveal/Fade';
import { SRLWrapper } from "simple-react-lightbox";
import Header from "./Header";
import Footer from "./Footer";


function Project(props) {

  useEffect(() => {
    document.title = "Projects - Aesthetics Marble World"
    // return () => {
    //     cleanup
    // }
}, [])


const findSrc = (id) => {
  console.log(props.banners)
  return props.banners && props.banners.docs.find(doc => doc.id === id).data().files.src
};


  return (
    <div className="project " >

    <Header />
    <Fade left>
    <div className="head" style={{backgroundImage: `url(${findSrc("S6J8kdpfuAWDNYKYwTy5")})`}}>
      <h1>Projects</h1>
      <p>OUR CREDENTIAL PAST AND CURRENT DELIVERIES</p>
    </div>
    </Fade>

    <div className="body">
    <SRLWrapper>
     
     <a className="gallery__trigger" href={ props.gallery && props.gallery.docs[0].data().files.src } data-attribute="SRL">
     <img src={ props.gallery && props.gallery.docs[0].data().files.src } className="view__gallery"  alt={ props.gallery && props.gallery.docs[0].data().name } />
    <p>View Gallery</p>
     </a>
      <div className="gallery">
      {
        props.gallery && props.gallery.docs.slice(1).map((doc, index) => <a key={index} href={ doc.data().files.src } data-attribute="SRL">
        <img className="gallery__image" src={ doc.data().files.src } alt={ doc.data().name} />
      </a>)
      }
      </div>
    </SRLWrapper>

    <div className="text">
    <Fade left>
    {props.banners ? <h2>PAST PROJECTS</h2> : <div></div>}
      <ul>
      {
        props.lists && props.lists.docs.find(doc => doc.id === "beuwdTJWXETIThrQs2Uz").data().item.map(list => <li>{list}</li>)
      }
      </ul>
</Fade>
      <Fade left >
      {props.banners ? <h2>ONGOING PROJECTS</h2> : <div></div>}
      <ul>
      {
        props.lists && props.lists.docs.find(doc => doc.id === "YZGeMIs6OTyTC26ETtfc").data().item.map(list => <li>{list}</li>)
      }
      </ul>
      </Fade>
    </div>
      
    </div>
   
    <Footer />
    </div>
  );
}

export default Project;
