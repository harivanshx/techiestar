import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import "./styles/App.scss";
import "./styles/Home.scss";
import "./styles/header.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/mediaquery.scss";

import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Services from "./component/Services";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
