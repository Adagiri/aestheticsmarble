import React, { useEffect, useState, lazy, Suspense } from "react";
// import 'mapbox-gl/dist/mapbox-gl.css';
import "./App.scss";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Spinner from "./Spinner";
import { db } from "./firebase";
import ErrorBoundary from "./ErrorBoundary";
import Footer from "./Footer";


const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const Resource = lazy(() => import("./Resource"));
const Contact = lazy(() => import("./Contact"));
const Services = lazy(() => import("./Services"));
const Project = lazy(() => import("./Project"));

function App() {
  const [scroll, setScroll] = useState(false);
  const [banners, setBanners] = useState("");
  const [gallery, setGallery] = useState("");
  const [homeGallery, setHomeGallery] = useState("");
  const [map, setMap] = useState("");
  const [lists, setLists] = useState("");
  const [resource, setResource] = useState("");

  useEffect(() => {
    var landmarks = Promise.all([
      db.collection("banners")
        .get()
        .then(function (querySnapshot) {
          setBanners(querySnapshot)
        }),
        db.collection("gallery")
        .get()
        .then(function (querySnapshot) {
          setGallery(querySnapshot)
        }),
        db.collection("homeGallery")
        .get()
        .then(function (querySnapshot) {
          setHomeGallery(querySnapshot)
        }),
        db.collection("lists")
        .get()
        .then(function (querySnapshot) {
          setLists(querySnapshot)
        }),
        db.collection("map")
        .get()
        .then(function (querySnapshot) {
          setMap(querySnapshot)
        }),
        db.collection("resource")
        .get()
        .then(function (querySnapshot) {
          setResource(querySnapshot)
        })
     
  ]);
  
    // return () => {
  
    // };
  }, []);

  const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;

    if (y > 500) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);

  return (
    <SimpleReactLightbox>
      <div className="App">
        <Router>
          <a
            className={scroll ? "top-link show" : "top-link hide"}
            href="##"
            onClick={scrollToTop}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
              <path d="M12 6H0l6-6z" />
            </svg>
          </a>
            <Switch>
            <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
            <Route path="/" exact render={() => <Home homeGallery={homeGallery} banners={banners} />} />

              <Route path="/projects" render={() => <Project  banners={banners} gallery={gallery} lists={lists} />} />
              <Route path="/about" render={() => <About  banners={banners} />} />
              <Route path="/services" render={() => <Services  banners={banners} lists={lists} />} />
              <Route path="/contact" render={() => <Contact map={map}  />} />
              <Route path="/resource" render={() => <Resource  banners={banners} resource={resource} />} />
            </Suspense>
            </ErrorBoundary>
              
            </Switch>

          
        </Router>
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
