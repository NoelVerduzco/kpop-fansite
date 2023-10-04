import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar navbar-expand'style={{ margin: '20px', padding: '10px' }}>
      <div className="d-flex align-items-center justify-content-between w-100">
        <NavLink className='navbar-brand' to='/'>
            KPop
        </NavLink>
        <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
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
