import React from 'react';

export default function FeatureCard({ icon, name, description, path, accent }) {
  return (
    <a
      href={path}
      className="feature-card"
      style={{ boxShadow: `0 0 24px 0 ${accent}` }}
    >
      <div className="feature-icon" style={{ color: accent }}>
        {icon}
      </div>
      <div className="feature-content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
} 