import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import favicon from '../assets/favicon.png';

function NavBar({ handleSearch }) {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get('searchQuery');
        handleSearch(query);
        setSearchQuery('');

        navigate('/search-results?query=' + query);
    };

    return (
        <nav
            className="navbar navbar-expand-lg bg-primary sticky-top"
            data-bs-theme="dark"
            style={{ padding: '10px' }}
        >
            <div className="d-flex align-items-center justify-content-between w-100">
                <NavLink className="navbar-brand" to="/">
                    <img
                        src={favicon}
                        alt="Favicon"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    K-Pop Fansite
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            id="linkGroups"
                            className="nav-link"
                            to="/groups"
                        >
                            Groups
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            id="linkIdols"
                            className="nav-link"
                            to="/idols"
                        >
                            Idols
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            id="linkAbout"
                            className="nav-link"
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            id="linkContact"
                            className="nav-link"
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input
                        name="searchQuery"
                        className="form-control me-sm-2"
                        type="search"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        className="btn btn-secondary my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;
