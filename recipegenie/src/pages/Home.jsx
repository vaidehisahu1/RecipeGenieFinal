import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Home() {
  return (
    <div className="home-hero-section">
      <div className="home-hero-bg"></div>
      <div className="home-hero-content">
        <div className="home-hero-badge">✨ Welcome to the Future</div>
        <h1 className="home-hero-title">
          Your Personal <span className="neon-gradient">AI Diet Companion</span>
        </h1>
        <p className="home-hero-summary">
          Transform your eating habits with intelligent meal planning, recipe discovery, and nutrition tracking that adapts to your lifestyle.
        </p>
        <div className="home-hero-actions">
          <Link to="/services" className="home-hero-btn primary">Get Started →</Link>
          <Link to="/about" className="home-hero-btn secondary">Learn More</Link>
        </div>
      </div>
      <div className="home-features-list">
        <FeatureCard
          icon="🍳"
          title="Recipe Finder Based on Ingredients"
          description="Input ingredients you have at home and instantly get recipe suggestions you can make."/>
        <FeatureCard
          icon="💧"
          title="Water Intake Tracker"
          description="Track your daily water intake, set personalized hydration goals, and receive reminders to stay hydrated."/>
        <FeatureCard
          icon="📈"
          title="Daily and Weekly Recap"
          description="Get a summary of calories consumed, water intake, and meals logged, with progress updates and actionable feedback."/>
        <FeatureCard
          icon="🛒"
          title="Smart Grocery List Generator"
          description="Automatically generate shopping lists from your meal plans and easily track purchased items."/>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="home-feature-card">
      <div className="home-feature-icon">{icon}</div>
      <div className="home-feature-title">{title}</div>
      <div className="home-feature-desc">{description}</div>
    </div>
  );
} 