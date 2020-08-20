import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function App() {

   const [scroll, setScroll] = useState(false)

  const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;
   
    if (y > 50) {
      setScroll(true)
    } else {
      setScroll(false);
    }
  };

  const scrollToTop = () => {
 
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 25);
    }
  };


  useEffect(() => {

    window.addEventListener("scroll", scrollFunc);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
       
        <a className={ scroll ? "top-link show" : "top-link hide"  } href="##" onClick={scrollToTop} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
      </a>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
