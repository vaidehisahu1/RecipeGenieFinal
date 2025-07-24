import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Services.css';
import './Home.css';

const features = [
  {
    name: 'Recipe Finder Based on Ingredients',
    description: [
      'Transform your available ingredients into delicious, healthy meals with our AI-powered recipe suggestion engine.',
      'Smart ingredient recognition and matching',
      'Dietary restriction and allergy filtering',
      'Nutritional information for every recipe',
      'Step-by-step cooking instructions',
      'Difficulty and time estimation',
    ],
    icon: '🥗',
    path: '/services/recipe-finder',
    button: 'Try Recipe Finder',
  },
  {
    name: 'Water Intake Tracker',
    description: [
      'Stay perfectly hydrated with personalized goals, smart reminders, and detailed hydration analytics.',
      'Personalized daily hydration goals',
      'Smart reminder notifications',
      'Visual progress tracking',
      'Hydration history and trends',
      'Integration with fitness trackers',
    ],
    icon: '💧',
    path: '/services/water-tracker',
    button: 'Try Water Intake',
  },
  {
    name: 'Progress Tracker',
    description: [
      'Comprehensive health analytics that provide insights into your nutrition journey and wellness progress.',
      'Daily calorie and nutrient tracking',
      'Weekly health summaries',
      'Progress visualization charts',
      'Achievement and milestone tracking',
      'Personalized health insights',
    ],
    icon: '📈',
    path: '/services/my-progress',
    button: 'Try Progress Tracker',
  },
  {
    name: 'Smart Grocery List Generator',
    description: [
      'Never forget ingredients again with AI-generated shopping lists based on your meal plans and preferences.',
      'Automatic list generation from meal plans',
      'Smart categorization and organization',
      'Price tracking and budget management',
      'Store layout optimization',
      'Shared lists for families',
    ],
    icon: '🛒',
    path: '/services/grocery-list',
    button: 'Try Smart Grocery',
  },
];

const faqs = [
  {
    q: 'How accurate are the AI recipe suggestions?',
    a: 'Our AI is trained on a vast dataset and continuously learns from user feedback to provide highly accurate and personalized recipe suggestions.'
  },
  {
    q: 'Can I customize my dietary restrictions and preferences?',
    a: 'Absolutely! RecipeGenie supports all major dietary preferences including vegetarian, vegan, keto, gluten-free, and many others. You can also set custom restrictions for allergies or personal preferences.'
  },
  {
    q: 'How does the water tracking feature work?',
    a: 'Set your daily hydration goal and log your water intake. The tracker provides reminders and visual progress updates to help you stay on track.'
  },
  {
    q: 'Is my health data secure and private?',
    a: 'Yes, your data is encrypted and stored securely. We never share your personal health information with third parties.'
  },
  {
    q: 'Can I export my grocery lists to other apps?',
    a: 'Yes, you can export your grocery lists in various formats compatible with popular shopping and note-taking apps.'
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleFeatureClick = (path) => {
    navigate(path);
  };

  const handleFAQClick = (idx) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  return (
    <div className="home-bg">
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo-icon">&#128717;</span>
          <span className="logo-text">RecipeGenie</span>
        </div>
        <nav className="navbar-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link active">Services</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
        </nav>
        <div className="navbar-right">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </header>
      <div className="services-page">
        {/* Hero Banner */}
        <section className="services-hero">
          <h1>
            Comprehensive Health Services <span className="neon-text">Powered by AI</span>
          </h1>
          <p className="services-hero-sub">
            Discover our complete suite of AI-powered tools designed to transform your health journey
          </p>
        </section>

        {/* Features Grid */}
        <div className="services-features-grid">
          {features.map((feature) => (
            <div className="services-feature-card" key={feature.name}>
              <div className="feature-header">
                <span className="feature-icon">{feature.icon}</span>
                <h2>{feature.name}</h2>
              </div>
              <ul className="feature-desc-list">
                <li style={{ fontWeight: 600, color: 'var(--color-accent2)', marginBottom: '1.2em', fontSize: '1.15em' }}>{feature.description[0]}</li>
                {feature.description.slice(1).map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              <button className="feature-btn" onClick={() => handleFeatureClick(feature.path)}>
                {feature.button}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="services-faq-section">
          <h2>Frequently Asked Questions</h2>
          <p className="faq-sub">Get answers to common questions about our services</p>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div className={`faq-item${openFAQ === idx ? ' open' : ''}`} key={faq.q}>
                <button className="faq-question" onClick={() => handleFAQClick(idx)}>
                  {faq.q}
                  <span className="faq-toggle">{openFAQ === idx ? '−' : '+'}</span>
                </button>
                <div
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: openFAQ === idx ? '200px' : '0',
                    opacity: openFAQ === idx ? 1 : 0,
                    transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
                    overflow: 'hidden',
                  }}
                >
                  <div className="faq-answer">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="services-cta">
          <h2>Ready to Transform Your Health?</h2>
          <p>Join thousands of users who have already started their journey to better health with RecipeGenie</p>
          <div className="cta-actions">
            <button className="cta-btn" onClick={() => {
              const topSection = document.querySelector('.services-features-grid');
              if (topSection) topSection.scrollIntoView({ behavior: 'smooth' });
            }}>Let's Go</button>
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