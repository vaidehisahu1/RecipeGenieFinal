import React from 'react';
import './FeaturePages.css';

export default function RecipeFinder() {
  return (
    <div className="feature-page-bg">
      <section className="feature-hero">
        <h1 className="feature-title neon-green">Recipe Finder</h1>
        <p className="feature-sub">Find delicious recipes based on the ingredients you have at home. Get personalized suggestions instantly!</p>
      </section>
      <div className="feature-card">
        <h2>Enter Your Ingredients</h2>
        <input className="feature-input" type="text" placeholder="e.g. chicken, rice, broccoli" />
        <button className="feature-btn-gradient">Find Recipes</button>
      </div>
    </div>
  );
} 