import './css/Nav.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">Rob Lehane</div>
      <nav>
        <ul className="links">
          <li><Link to="/">home</Link></li>
          <li><Link to="/projects">projects</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;