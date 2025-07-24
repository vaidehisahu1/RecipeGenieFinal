import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    window.location.reload();
  };
  return (
    <div className="home-bg">
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo-icon">&#128717;</span>
          <span className="logo-text">RecipeGenie</span>
        </div>
        <nav className="navbar-center">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
        </nav>
        <div className="navbar-right">
          {isLoggedIn ? (
            <button className="login-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </>
          )}
        </div>
      </header>
      <main>
        <section className="hero hero-two-col">
          <div className="hero-overlay"></div>
          <div className="hero-content-col">
            <div className="hero-content">
              <div className="hero-badge"><span className="hero-badge-icon">&#9889;</span> Welcome to the Future</div>
              <h1 className="hero-title">Your Personal <span className="hero-title-accent">AI Diet Companion</span></h1>
              <p className="hero-desc">Transform your eating habits with intelligent meal planning, recipe discovery, and nutrition tracking that adapts to your lifestyle.</p>
              <div className="hero-actions">
                <Link to="/services" className="btn btn-primary">Get Started →</Link>
                <Link to="/about" className="btn btn-secondary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="hero-mealplan-box-col">
            <ContactForm />
          </div>
          <img className="hero-img" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" alt="Healthy food" />
        </section>
        <section className="features">
          <h2 className="section-title neon-gradient">Features Offered</h2>
          <p className="section-desc">Discover powerful features designed to make healthy eating simple, enjoyable, and sustainable.</p>
          <div className="features-list">
            <FeatureCard icon="🔍" iconColor="var(--color-accent)" title="Recipe Finder" desc="Find amazing recipes based on ingredients you already have at home." />
            <FeatureCard icon="💧" iconColor="var(--color-accent2)" title="Water Tracker" desc="Track your daily water intake and stay hydrated with smart reminders." />
            <FeatureCard icon="📈" iconColor="var(--color-accent3)" title="Progress Tracking" desc="Monitor your nutrition goals with detailed daily and weekly reports." />
            <FeatureCard icon="🛒" iconColor="var(--color-link)" title="Smart Grocery Lists" desc="Auto-generate shopping lists from meal plans and track purchases." />
          </div>
        </section>
        <section className="why">
          <h2 className="section-title neon-gradient">Why Choose RecipeGenie?</h2>
          <p className="section-desc">Experience the perfect blend of technology and nutrition science to achieve your health goals.</p>
          <div className="why-list">
            <WhyCard icon="&#128717;" title="AI-Powered Meal Planning" desc="Get personalized meal suggestions based on your dietary preferences, available ingredients, and nutritional goals." highlight="10,000+ recipes" />
            <WhyCard icon="&#128202;" title="Smart Nutrition Tracking" desc="Effortlessly track calories, macros, and water intake with our intuitive interface and visual progress indicators." highlight="Track 40+ nutrients" />
            <WhyCard icon="&#128101;" title="Community & Support" desc="Join thousands of users on their health journey with shared recipes, tips, and motivation." highlight="50,000+ active users" />
            <WhyCard icon="&#128241;" title="Works Everywhere" desc="Access your meal plans, recipes, and progress from any device, anywhere, anytime." highlight="100% mobile optimized" />
          </div>
        </section>
        <section className="cta">
          <h2 className="section-title neon-gradient">Ready to Transform Your Eating Habits?</h2>
          <p className="section-desc">Join thousands of users who have already improved their health with RecipeGenie. Start your journey to better nutrition today!</p>
          <div className="cta-actions">
            <button className="btn btn-primary" onClick={() => navigate('/services/recipe-finder')}>Start Finding Recipes</button>
            <button className="btn btn-outline" onClick={() => navigate('/services/water-tracker')}>Track Water Intake</button>
          </div>
        </section>
        <section className="testimonials">
          <h2 className="section-title neon-gradient">Loved by Food Enthusiasts</h2>
          <p className="section-desc">See what our community has to say about their RecipeGenie experience</p>
          <div className="testimonials-list">
            <TestimonialCard name="Sarah Johnson" role="Fitness Enthusiast" text="RecipeGenie has completely transformed how I plan my meals. The ingredient-based recipe finder is a game changer!" />
            <TestimonialCard name="Mike Chen" role="Busy Parent" text="The grocery list feature saves me so much time. I love how it generates lists from my meal plans automatically." />
            <TestimonialCard name="Emily Rodriguez" role="Health Coach" text="I recommend RecipeGenie to all my clients. The progress tracking and water reminders help them stay on track." />
          </div>
        </section>
      </main>
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

function FeatureCard({ icon, iconColor, title, desc }) {
  return (
    <div className="feature-card">
      <div className="feature-icon" style={{ background: iconColor }}>{icon}</div>
      <div className="feature-title">{title}</div>
      <div className="feature-desc">{desc}</div>
    </div>
  );
}

function WhyCard({ icon, title, desc, highlight }) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>
      <div className="why-title">{title}</div>
      <div className="why-desc">{desc}</div>
      <div className="why-highlight">{highlight}</div>
    </div>
  );
}

function TestimonialCard({ name, role, text }) {
  // Assign profile photos based on name
  let avatar = '';
  if (name === 'Sarah Johnson') avatar = 'https://randomuser.me/api/portraits/women/44.jpg';
  else if (name === 'Mike Chen') avatar = 'https://randomuser.me/api/portraits/men/32.jpg';
  else if (name === 'Emily Rodriguez') avatar = 'https://randomuser.me/api/portraits/women/65.jpg';
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">★★★★★</div>
      <div className="testimonial-text">“{text}”</div>
      <div className="testimonial-user">
        <span className="testimonial-avatar">
          {avatar && <img src={avatar} alt={name} style={{ width: 40, height: 40, borderRadius: '50%' }} />}
        </span>
        <span>
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-role">{role}</div>
        </span>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="contact-form">
      <h2 className="contact-form-title neon-gradient">Contact Us</h2>
      <input type="text" name="name" placeholder="Name" className="contact-input" required />
      <input type="email" name="email" placeholder="Email" className="contact-input" required />
      <textarea name="message" placeholder="Message" className="contact-textarea" rows="4" required></textarea>
      <button type="submit" className="contact-submit-btn btn btn-primary">Submit</button>
    </form>
  );
} 