import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>
          Revolutionizing Health Through <span className="neon-text">AI Innovation</span>
        </h1>
        <p className="about-hero-sub">
          We're on a mission to make personalized nutrition accessible to everyone, using cutting-edge AI to transform how people approach their health and wellness.
        </p>
      </section>

      {/* Journey Timeline */}
      <section className="about-journey">
        <h2>Our Journey</h2>
        <p className="about-journey-sub">From a simple idea to a revolutionary health platform</p>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year neon-pill">2022</div>
            <div className="timeline-content">
              <h3>Company Founded</h3>
              <p>RecipeGenie was born from a vision to make healthy eating accessible through AI technology.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year neon-pill">2023</div>
            <div className="timeline-content">
              <h3>Beta Launch</h3>
              <p>Launched our beta version with 1,000 early adopters and received overwhelming positive feedback.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year neon-pill">2024</div>
            <div className="timeline-content">
              <h3>AI Breakthrough</h3>
              <p>Developed our proprietary AI algorithm that personalizes nutrition recommendations with 95% accuracy.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year neon-pill">2025</div>
            <div className="timeline-content">
              <h3>Global Expansion</h3>
              <p>Serving over 100,000 users worldwide with plans to expand to new markets and languages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission-vision">
        <div className="about-mission card">
          <h3><span className="icon-mission" />Our Mission</h3>
          <p>To democratize personalized nutrition by leveraging artificial intelligence, making healthy eating accessible, enjoyable, and sustainable for people from all walks of life.</p>
          <p>We believe that everyone deserves access to personalized health guidance, regardless of their background, budget, or location. Our AI-powered platform breaks down barriers and provides intelligent solutions that adapt to each person's unique needs.</p>
        </div>
        <div className="about-vision card">
          <h3><span className="icon-vision" />Our Vision</h3>
          <p>To create a world where personalized nutrition is the norm, not the exception, empowering individuals to take control of their health through intelligent technology.</p>
          <p>We envision a future where AI seamlessly integrates into daily life, providing real-time guidance that helps people make informed decisions about their nutrition, leading to healthier, happier communities worldwide.</p>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <h2>Our Values</h2>
        <p className="about-values-sub">The principles that guide everything we do</p>
        <div className="values-grid">
          <div className="value-card">
            <span className="icon-value health" />
            <h4>Health First</h4>
            <p>Every decision we make prioritizes the health and wellbeing of our users above all else.</p>
          </div>
          <div className="value-card">
            <span className="icon-value innovation" />
            <h4>Innovation</h4>
            <p>We continuously push the boundaries of what's possible with AI and nutrition science.</p>
          </div>
          <div className="value-card">
            <span className="icon-value accessibility" />
            <h4>Accessibility</h4>
            <p>We believe healthy living should be accessible to everyone, regardless of their circumstances.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <p className="about-team-sub">The passionate experts behind RecipeGenie's innovation</p>
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
  );
} 