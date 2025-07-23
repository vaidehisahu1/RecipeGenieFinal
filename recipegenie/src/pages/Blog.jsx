import React from 'react';

export default function Blog() {
  return (
    <div className="card" style={{ margin: '2em auto', maxWidth: 800 }}>
      <h1 style={{ color: '#ffb347', textShadow: '0 0 12px #ffb34788' }}>Blog</h1>
      <p style={{ fontSize: '1.1em', color: 'var(--color-text)' }}>
        Stay tuned for the latest updates, tips, and stories from RecipeGenie!
      </p>
    </div>
  );
} 