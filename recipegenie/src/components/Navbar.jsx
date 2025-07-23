import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { name: 'Recipe Finder', path: '/services/recipe-finder' },
      { name: 'Water Tracker', path: '/services/water-tracker' },
      { name: 'My Progress', path: '/services/my-progress' },
      { name: 'Grocery List', path: '/services/grocery-list' },
    ],
  },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-neon">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span role="img" aria-label="genie" style={{ marginRight: 8 }}>🧞‍♂️</span>
          <span>RecipeGenie</span>
        </Link>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                className="navbar-dropdown"
                key={link.name}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <span className="navbar-link">
                  {link.name} <span style={{ fontSize: 12 }}>▼</span>
                </span>
                {showDropdown && (
                  <div className="dropdown-menu">
                    {link.dropdown.map((item) => (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? 'dropdown-link active' : 'dropdown-link'
                        }
                        key={item.name}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
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