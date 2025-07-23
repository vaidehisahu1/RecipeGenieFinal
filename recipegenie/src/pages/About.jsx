import React from 'react';

export default function About() {
  return (
    <div className="card" style={{ margin: '2em auto', maxWidth: 800 }}>
      <h1 style={{ color: '#ffb347', textShadow: '0 0 12px #ffb34788' }}>About Us</h1>
      <p style={{ fontSize: '1.1em', color: 'var(--color-text)' }}>
        Welcome to RecipeGenie! We are dedicated to helping you achieve your health goals with personalized meal planning, nutrition tracking, and smart grocery lists—all powered by AI.
      </p>
    </div>
  );
} 