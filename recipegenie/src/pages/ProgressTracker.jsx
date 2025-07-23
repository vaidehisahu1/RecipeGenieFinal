import React from 'react';
import './FeaturePages.css';

export default function ProgressTracker() {
  return (
    <div className="feature-page-bg">
      <section className="feature-hero">
        <h1 className="feature-title neon-green">My Progress</h1>
        <p className="feature-sub">Track your nutrition journey and celebrate your achievements</p>
      </section>
      <div className="progress-summary-row">
        <div className="progress-summary-card">
          <h3>Calories</h3>
          <div className="progress-bar-bg"><div className="progress-bar" style={{ width: '83%' }}></div></div>
          <div className="progress-summary-label">1650 / 2000</div>
        </div>
        <div className="progress-summary-card">
          <h3>Water</h3>
          <div className="progress-bar-bg"><div className="progress-bar" style={{ width: '90%' }}></div></div>
          <div className="progress-summary-label">1800 / 2000 ml</div>
        </div>
        <div className="progress-summary-card">
          <h3>Meals</h3>
          <div className="progress-bar-bg"><div className="progress-bar" style={{ width: '100%' }}></div></div>
          <div className="progress-summary-label">3 logged</div>
        </div>
      </div>
      <div className="progress-macros-row">
        <h3>Today's Macros</h3>
        <div className="macro-bar"><span>Protein</span><div className="progress-bar-bg"><div className="progress-bar" style={{ width: '70%' }}></div></div></div>
        <div className="macro-bar"><span>Carbs</span><div className="progress-bar-bg"><div className="progress-bar" style={{ width: '60%' }}></div></div></div>
        <div className="macro-bar"><span>Fat</span><div className="progress-bar-bg"><div className="progress-bar" style={{ width: '40%' }}></div></div></div>
      </div>
      <div className="progress-achievements-row">
        <h3>Achievements</h3>
        <div className="achievement-card neon-glow">7-Day Streak</div>
        <div className="achievement-card">Balanced Eater</div>
        <div className="achievement-card">Hydration Hero</div>
        <div className="achievement-card">Goal Crusher</div>
      </div>
    </div>
  );
} 