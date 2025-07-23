import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-neon">
      <div className="footer-glow-bar"></div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="footer-newsletter">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <p className="footer-newsletter-text">Get the latest recipes and health tips!</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@recipegenie.com</p>
          <p>Phone: +1 234 567 8901</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook" className="footer-social-icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17 2.1v3.2c0 .3.2.7.7.7h2.1v3.2h-2.8v8.6h-3.5v-8.6h-2.1V6h2.1V4.2C11.5 2.7 12.6 2 14.1 2h2.9v2.1h-2.1c-.2 0-.4.2-.4.4z" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="footer-social-icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M22 5.9c-.8.4-1.6.7-2.5.8.9-.5 1.6-1.4 2-2.3-.8.5-1.7.9-2.6 1.1-.8-.8-2-1.3-3.2-1.3-2.4 0-4.3 1.9-4.3 4.3 0 .3 0 .6.1.9-3.6-.2-6.7-1.9-8.8-4.5-.4.6-.6 1.4-.6 2.1 0 1.5.8 2.8 2 3.6-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.8 3.5 4.2-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.3 3.1 4.3 3.1-1.6 1.2-3.6 1.9-5.7 1.9-.4 0-.8 0-1.2-.1 2 1.3 4.3 2.1 6.8 2.1 8.2 0 12.7-6.8 12.7-12.7v-.6c.9-.6 1.6-1.4 2.2-2.3z" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="footer-social-icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="footer-social-icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M8 11v5M8 8v.01M12 16v-5m0 0c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 RecipeGenie. All rights reserved.</span>
      </div>
    </footer>
  );
} 