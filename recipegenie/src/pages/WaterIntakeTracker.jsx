import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeaturePages.css';

const MIN_GOAL = 500;
const MAX_GOAL = 7000;
const STEP = 500;

export default function WaterIntakeTracker() {
  const [goal, setGoal] = useState(2000);
  const [intake, setIntake] = useState(0);

  // Update goal instantly
  const handleGoalChange = (delta) => {
    setGoal((prev) => {
      let next = prev + delta;
      if (next < MIN_GOAL) next = MIN_GOAL;
      if (next > MAX_GOAL) next = MAX_GOAL;
      // If intake > new goal, clamp intake
      setIntake((intakePrev) => Math.min(intakePrev, next));
      return next;
    });
  };
  const handleManualGoal = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = MIN_GOAL;
    if (val < MIN_GOAL) val = MIN_GOAL;
    if (val > MAX_GOAL) val = MAX_GOAL;
    setGoal(val);
    setIntake((intakePrev) => Math.min(intakePrev, val));
  };

  const addIntake = (amount) => {
    setIntake((prev) => Math.min(prev + amount, goal));
  };
  const resetToday = () => setIntake(0);

  const percent = Math.min(100, Math.round((intake / goal) * 100));
  const remaining = Math.max(0, goal - intake);

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
          <Link to="/services/water-tracker" className="nav-link active">Water Tracker</Link>
          <Link to="/services/my-progress" className="nav-link">Progress Tracker</Link>
          <Link to="/services/grocery-list" className="nav-link">Grocery List</Link>
        </nav>
        <div className="navbar-right">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </header>

      <section className="feature-hero">
        <h1 className="feature-title neon-green">Water Intake Tracker</h1>
        <p className="feature-sub">Stay hydrated and track your daily water consumption</p>
      </section>
      <div className="feature-card">
        <div className="water-progress-circle">
          <span className="water-amount">{intake}ml</span>
          <span className="water-goal">of {goal}ml</span>
        </div>
        <div className="water-progress-bar-bg">
          <div className="water-progress-bar" style={{ width: percent + '%' }}></div>
        </div>
        <p className="feature-sub">You need <span className="neon-green">{remaining}ml</span> more to reach your goal</p>
        <div className="water-btn-row">
          {[250, 500, 750, 1000].map((amt) => (
            <button className="feature-btn-gradient" key={amt} onClick={() => addIntake(amt)}>
              +{amt}ml
            </button>
          ))}
        </div>
        <div className="water-custom-row">
          <button className="feature-btn-outline" onClick={() => handleGoalChange(-STEP)} disabled={goal <= MIN_GOAL}>-</button>
          <input
            className="feature-input"
            type="number"
            min={MIN_GOAL}
            max={MAX_GOAL}
            value={goal}
            onChange={handleManualGoal}
            style={{ width: 100, textAlign: 'center' }}
          />
          <button className="feature-btn-outline" onClick={() => handleGoalChange(STEP)} disabled={goal >= MAX_GOAL}>+</button>
        </div>
        <div className="water-action-row">
          <button className="feature-btn-outline danger" onClick={resetToday}>Reset Today</button>
        </div>
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