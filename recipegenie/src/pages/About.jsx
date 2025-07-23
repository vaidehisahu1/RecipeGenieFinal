import React from 'react';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <div className="about-hero-badge">✨ Our Story</div>
          <h1 className="about-hero-title">
            Revolutionizing <span className="neon-gradient">Nutrition & Wellness</span>
          </h1>
          <p className="about-hero-summary">
            RecipeGenie was born from the vision of making personalized nutrition accessible to everyone. 
            We combine cutting-edge AI technology with culinary expertise to transform how you plan, cook, and enjoy your meals.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-section">
        <div className="about-container">
          <div className="about-mission-card">
            <div className="mission-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>
              To empower individuals on their health journey by providing intelligent, personalized nutrition solutions 
              that adapt to their unique lifestyle, preferences, and goals. We believe that healthy eating should be 
              simple, enjoyable, and sustainable.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-section">
        <div className="about-container">
          <h2 className="section-title">What Drives Us</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤖</div>
              <h3>AI-Powered Intelligence</h3>
              <p>Leveraging advanced machine learning to provide personalized recommendations that evolve with your preferences.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💚</div>
              <h3>Health-First Approach</h3>
              <p>Every feature is designed with your well-being in mind, promoting sustainable and balanced nutrition habits.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Seamless Experience</h3>
              <p>Creating intuitive, beautiful interfaces that make healthy living feel effortless and enjoyable.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h3>Science-Backed</h3>
              <p>Our recommendations are grounded in nutritional science and evidence-based research.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="about-section">
        <div className="about-container">
          <h2 className="section-title">Why Choose RecipeGenie?</h2>
          <div className="features-highlight">
            <div className="feature-highlight-card">
              <div className="feature-highlight-icon">🍳</div>
              <div className="feature-highlight-content">
                <h3>Smart Recipe Discovery</h3>
                <p>Find perfect recipes based on ingredients you already have, dietary restrictions, and nutritional goals.</p>
              </div>
            </div>
            <div className="feature-highlight-card">
              <div className="feature-highlight-icon">📊</div>
              <div className="feature-highlight-content">
                <h3>Comprehensive Tracking</h3>
                <p>Monitor calories, water intake, and nutritional balance with detailed analytics and insights.</p>
              </div>
            </div>
            <div className="feature-highlight-card">
              <div className="feature-highlight-icon">🛒</div>
              <div className="feature-highlight-content">
                <h3>Intelligent Shopping</h3>
                <p>Generate optimized grocery lists that save time and reduce food waste.</p>
              </div>
            </div>
            <div className="feature-highlight-card">
              <div className="feature-highlight-icon">📈</div>
              <div className="feature-highlight-content">
                <h3>Progress Insights</h3>
                <p>Get meaningful feedback on your journey with weekly recaps and achievement tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-section">
        <div className="about-container">
          <h2 className="section-title">Meet the Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💻</div>
              <h3>Alex Chen</h3>
              <p className="team-role">Lead AI Engineer</p>
              <p>Specializes in machine learning and nutritional algorithms, bringing 8+ years of experience in health tech.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍🍳</div>
              <h3>Maria Rodriguez</h3>
              <p className="team-role">Nutrition Scientist</p>
              <p>Licensed dietitian with a passion for translating complex nutrition science into practical, everyday solutions.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍🎨</div>
              <h3>David Kim</h3>
              <p className="team-role">UX Design Lead</p>
              <p>Creates beautiful, intuitive experiences that make healthy living feel natural and engaging.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="about-cta-section">
        <div className="about-container">
          <div className="cta-card">
            <h2>Ready to Transform Your Health Journey?</h2>
            <p>Join thousands of users who have already discovered the power of AI-driven nutrition planning.</p>
            <div className="cta-buttons">
              <a href="/services" className="cta-btn primary">Get Started Today</a>
              <a href="/contact" className="cta-btn secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 