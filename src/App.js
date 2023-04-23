import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { FaLevelUpAlt } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/HomeDefault";
import HomeTwo from './pages/HomeTwo';
import HomeThree from './pages/HomeThree';
import About from "./pages/About";
import ServiceOne from './pages/ServiceOne';
import ServiceTwo from './pages/ServiceTwo';
import ServiceDetails from './pages/ServiceDetails';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import ProjectDetails from "./pages/ProjectDetails";
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import Blog from "./pages/Blog";
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ScrollToTopRoute from './components/scroll-to-top-route/ScrollToTopRoute';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/vendor/slick/slick.css";
import './assets/css/default.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/vendor/modal-video/modal-video.min.css';
import "../node_modules/yet-another-react-lightbox/dist/styles.css";

function App() {
  return (
    <Router>
      <ScrollToTopRoute />
        <Routes>
            <Route path="/" exact element={<HomeDefault />} />
            <Route path="/about" exact  element={<About />} />
            <Route path="/project-one" exact  element={<ProjectOne />} />
            <Route path="/team" exact  element={<Team />} />
            <Route path="/gallery" exact  element={<Gallery />} />
            <Route path="/contact" exact  element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <ScrollToTop className="scrollUp" smooth top="1500" component={<FaLevelUpAlt />} />
    </Router>
  );
}

export default App;
