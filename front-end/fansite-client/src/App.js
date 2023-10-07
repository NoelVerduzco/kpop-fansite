import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
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
import ViewResults from './pages/ViewResults';

function App() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (query, navigate) => {
    try {
      // Perform the search and update 'results' state as needed
      // Example: const searchResults = await searchFunction(query);
      // setResults(searchResults);

      // Navigate to the search results page
      navigate(`/search-results?query=${query}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <NavBar handleSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="groups/*" element={<ViewGroups />} />
          <Route path="groups/:groupId" element={<ViewGroup />} />
          <Route path="idols/*" element={<ViewIdols />} />
          <Route path="idols/:id" element={<ViewIdol />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="search-results"
            element={<ViewResults results={results} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
