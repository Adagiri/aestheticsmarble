import React, { useEffect, useState, lazy, Suspense, } from "react";
import "./App.scss";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Spinner from "./Spinner";
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';


const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const Resource = lazy(() => import("./Resource"));
const Contact = lazy(() => import("./Contact"));
const Services = lazy(() => import("./Services"));
const Project = lazy(() => import("./Project"));

function App() {
  const [scroll, setScroll] = useState(false);

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
          <Suspense fallback={<Spinner />}>
          <AnimatedSwitch
          atEnter={{ offset: -100 }}
          atLeave={{ offset: 100 }}
          atActive={{ offset: 0 }}
          mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
          })}
          className="switch-wrapper"
        >
                <Route path="/" exact component={Home}  />
                <Route path="/projects" exact component={Project} />
                <Route path="/about" exact component={About} />
                <Route path="/services" exact component={Services} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/resource" exact component={Resource} />
                </AnimatedSwitch>
          </Suspense>
        </Router>
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
