// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/quartz/bootstrap.min.css';
import './App.css';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ViewGroups from './pages/groups/ViewGroups';
import ViewGroup from './pages/groups/ViewGroup'; 
import ViewIdol from './pages/idols/ViewIdol';
import ViewIdols from './pages/idols/ViewIdols';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/groups/:groupId" element={<ViewGroup />} />
        <Route path="/groups" element={<ViewGroups />} />
        <Route path="/idol/:id" element={<ViewIdol />} />
        <Route path="/idols" element={<ViewIdols />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
