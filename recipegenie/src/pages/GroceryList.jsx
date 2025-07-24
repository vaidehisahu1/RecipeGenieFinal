import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './FeaturePages.css';

function groupIngredients(ingredients) {
  // Group and dedupe, count occurrences
  const map = {};
  ingredients.forEach((item) => {
    const key = item.trim().toLowerCase();
    if (!key) return;
    map[key] = (map[key] || 0) + 1;
  });
  return Object.entries(map).map(([name, count]) => ({ name, count }));
}

export default function GroceryList() {
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem('groceryList') || '[]');
    setItems(groupIngredients(raw));
  }, []);

  const handleCheck = (name) => {
    setChecked((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="feature-page-bg">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo-icon">&#128717;</span>
          <span className="logo-text">RecipeGenie</span>
        </div>
        <nav className="navbar-center">
          <Link to="/services/recipe-finder" className="nav-link">Recipe Finder</Link>
          <Link to="/services/water-tracker" className="nav-link">Water Tracker</Link>
          <Link to="/services/my-progress" className="nav-link">Progress Tracker</Link>
          <Link to="/services/grocery-list" className="nav-link active">Grocery List</Link>
        </nav>
        <div className="navbar-right">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="feature-hero">
        <h1 className="feature-title neon-pink">Shopping List</h1>
        <p className="feature-sub">Check off what you already have, or pick more recipes!</p>
      </section>
      <div className="feature-card" style={{ maxWidth: 700 }}>
        <h2 style={{ color: '#baff39', marginBottom: 18 }}>Check off the required ingredients</h2>
        <div className="grocery-list-grid">
          {items.length === 0 && <div style={{ color: '#ff5eae', fontWeight: 600 }}>No items yet. Pick a recipe!</div>}
          {items.map((item) => (
            <label key={item.name} className={`grocery-list-checkbox${checked[item.name] ? ' checked' : ''}`}>
              <input
                type="checkbox"
                checked={!!checked[item.name]}
                onChange={() => handleCheck(item.name)}
              />
              <span style={{ textTransform: 'capitalize' }}>{item.name}{item.count > 1 ? ` x${item.count}` : ''}</span>
            </label>
          ))}
        </div>
        <button className="feature-btn-gradient" style={{ marginTop: 24 }} onClick={() => navigate('/services/recipe-finder')}>Pick a different recipe</button>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo neon-gradient">RecipeGenie</div>
            <div className="footer-desc">Pioneering the future with cutting-edge technology solutions that illuminate possibilities.</div>
            <div className="footer-socials"></div>
          </div>
          <div className="footer-links">
            <div className="footer-links-title neon-gradient">Quick Links</div>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <div className="footer-contact">
            <div className="footer-links-title neon-gradient">Contact Info</div>
            <div>contact@recipegenie.com</div>
            <div>+1 (555) 123-4567</div>
            <div>San Francisco, CA</div>
          </div>
          <div className="footer-newsletter">
            <div className="footer-links-title neon-gradient">Stay Updated</div>
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">© 2025 RecipeGenie. All rights reserved.</div>
      </footer>
    </div>
  );
} 