import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/vapor/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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

import { searchGroups, searchIdols } from './services/data';
import YouTubeVideoPlayer from './pages/YouTubeVideoPlayer';

function App() {
    const [results, setResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
        console.log('Search query:', query);
    };

    useEffect(() => {
        if (searchQuery) {
            Promise.all([searchGroups(searchQuery), searchIdols(searchQuery)])
                .then(([groupResults, idolResults]) => {
                    const filteredGroupResults = groupResults.filter((group) =>
                        group.groupName
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                    );
                    const filteredIdolResults = idolResults.filter((idol) =>
                        idol.stage_name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                    );
                    const combinedResults = [
                        ...filteredGroupResults,
                        ...filteredIdolResults,
                    ];
                    setResults(combinedResults);
                    console.log('Search results:', combinedResults);
                })
                .catch((error) => {
                    console.error(error);
                    setResults([]);
                });
        } else {
            setResults([]);
        }
    }, [searchQuery]);

    return (
        <Router>
            <NavBar handleSearch={handleSearch} />

            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path="youtube/player" element={<YouTubeVideoPlayer />} />
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
