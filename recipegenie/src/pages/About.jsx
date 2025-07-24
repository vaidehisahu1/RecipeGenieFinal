import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import './Home.css';

export default function About() {
  return (
    <div className="home-bg">
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo-icon">&#128717;</span>
          <span className="logo-text">RecipeGenie</span>
        </div>
        <nav className="navbar-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link active">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
        </nav>
        <div className="navbar-right">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </header>
      <div className="about-page">
        <section className="about-hero">
          <h1>About RecipeGenie</h1>
          <h2 className="about-hero-sub">Personalized Nutrition. Simplified by AI.</h2>
          <p>At RecipeGenie, we’re transforming the way people approach food and wellness by making personalized diet planning smart,
             simple, and accessible. Our AI-powered platform helps users discover meal plans, recipes, and grocery lists tailored to their health goals —
              whether it’s weight loss, muscle gain, or just eating better.</p>
        </section>
        <section className="about-journey">
          <h2 style={{ textAlign: 'center' }}>Our Journey</h2>
          <p className="about-journey-sub" style={{ textAlign: 'center' }}>From a simple idea to a powerful everyday companion for smart eating.</p>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year neon-pill"> 2022</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>RecipeGenie was founded with a clear vision: make healthy eating easy for everyone through intelligent recipe and nutrition technology.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year neon-pill"> 2023</div>
              <div className="timeline-content">
                <h3>Beta Goes Live</h3>
                <p>We launched our beta with over 1,000 users, refining features like the Recipe Finder, Water Tracker, and Smart Grocery List based on real feedback.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year neon-pill"> 2024</div>
              <div className="timeline-content">
                <h3>AI That Understands You</h3>
                <p>Our breakthrough: a proprietary AI algorithm that personalizes meal plans with 95% relevance based on user preferences, goals, and ingredients.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year neon-pill"> 2025</div>
              <div className="timeline-content">
                <h3>Scaling Globally</h3>
                <p>Today, RecipeGenie is helping over 100,000 users across the world eat better, smarter, and with purpose — with expansion into multilingual support and diverse dietary needs underway.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-mission-vision">
          <div className="about-mission card">
            <h3><span className="icon-mission" />Our Mission</h3>
            <p>To make smart, personalized nutrition available to everyone — not just the health experts.</p>
            <p>We believe food is fuel, medicine, and joy. RecipeGenie empowers people with practical, AI-driven guidance that’s rooted in real life: your ingredients, your goals, your lifestyle.</p>
          </div>
          <div className="about-vision card">
            <h3><span className="icon-vision" />Our Vision</h3>
            <p>A world where food choices are easy, intentional, and backed by intelligent tech.</p>
            <p>We imagine a future where your daily meal decisions are no longer overwhelming — because RecipeGenie handles the complexity, leaving you to enjoy healthy living effortlessly.</p>
          </div>
        </section>
        <section className="about-values">
          <h2 style={{ textAlign: 'center' }}>What We Value</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="icon-value health" />
              <h4> User-Focused Innovation</h4>
              <p>We build tools that solve real user needs with AI — not hype.</p>
            </div>
            <div className="value-card">
              <span className="icon-value innovation" />
              <h4> Everyday Accessibility</h4>
              <p>From busy students to working parents, our platform is made for all.</p>
            </div>
            <div className="value-card">
              <span className="icon-value accessibility" />
              <h4> Clarity & Simplicity</h4>
              <p>Nutrition advice shouldn’t feel like a puzzle. We keep it clean and usable.</p>
            </div>
            <div className="value-card">
              <span className="icon-value accessibility" />
              <h4> Health Without Judgement</h4>
              <p>We support progress over perfection, encouraging balanced and sustainable habits.</p>
            </div>
          </div>
        </section>
        <section className="about-team">
          <h2 style={{ textAlign: 'center' }}>Meet Our Team</h2>
          <p className="about-team-sub" style={{ textAlign: 'center' }}>The passionate experts behind RecipeGenie's innovation</p>
          <div className="team-grid">
            <div className="team-card">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Dr. Sarah Mitchell" />
              <h4>Dr. Sarah Mitchell</h4>
              <span className="team-role neon-text">Chief Executive Officer</span>
              <p>Nutritionist with 15+ years experience in personalized diet planning and AI health solutions.</p>
              <span className="team-tag">Nutrition Science</span>
            </div>
            <div className="team-card">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex Chen" />
              <h4>Alex Chen</h4>
              <span className="team-role neon-text">Chief Technology Officer</span>
              <p>AI specialist focused on machine learning applications in healthcare and personalized nutrition.</p>
              <span className="team-tag">AI & Machine Learning</span>
            </div>
            <div className="team-card">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Maria Rodriguez" />
              <h4>Maria Rodriguez</h4>
              <span className="team-role neon-text">Head of Product Design</span>
              <p>UX designer passionate about creating intuitive health apps that make wellness accessible to everyone.</p>
              <span className="team-tag">Product Design</span>
            </div>
            <div className="team-card">
              <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Dr. James Wilson" />
              <h4>Dr. James Wilson</h4>
              <span className="team-role neon-text">Clinical Advisor</span>
              <p>Board-certified physician specializing in preventive medicine and lifestyle interventions.</p>
              <span className="team-tag">Preventive Medicine</span>
            </div>
          </div>
        </section>
      </div>
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