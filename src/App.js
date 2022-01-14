import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AboutPage, AdoptPage, BlogDetails, BlogPage, ContactPage, HomePage, PetsCatalouge } from "./componenet";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/about"  element={<AboutPage />} />
          <Route path="/blog"  element={<BlogPage />} />
          <Route path="/blog/:blogid"  element={<BlogDetails />} />
          <Route path="/contact"  element={<ContactPage />} />
          <Route path="/adopt"  element={<AdoptPage />} />
          <Route path="/adopt/:input"  element={<AdoptPage />} />
          <Route path="/pets/:type/:sex/:age"  element={<PetsCatalouge />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
