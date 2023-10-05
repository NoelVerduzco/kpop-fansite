import React from 'react';
import { NavLink } from 'react-router-dom';
import favicon from '../assets/favicon.png';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" style={{ padding: '10px' }}>
      <div className="d-flex align-items-center justify-content-between w-100">
        <NavLink className='navbar-brand' to='/'>
          <img src={favicon} alt="Favicon" width="30" height="30" className="d-inline-block align-top" /> KPop
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item"> 
            <NavLink id="linkGroups" className='nav-link' to="/groups">
              Groups
            </NavLink>
          </li>
          <li className="nav-item"> 
            <NavLink id="linkIdols" className='nav-link' to="/idols">
              Idols
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink id="linkAbout" className='nav-link' to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink id="linkContact" className='nav-link' to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
