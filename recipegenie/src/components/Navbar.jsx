import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-neon">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo neon-gradient-text">
          <span role="img" aria-label="genie" style={{ marginRight: 8 }}>🧞‍♂️</span>
          <span>RecipeGenie</span>
        </Link>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
              key={link.name}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/login" className="navbar-btn neon-gradient-btn">Login</Link>
          <Link to="/signup" className="navbar-btn neon-gradient-btn">Sign Up</Link>
        </div>
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
} 