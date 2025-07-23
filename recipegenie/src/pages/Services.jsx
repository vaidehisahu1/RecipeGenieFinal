import React from 'react';
import FeatureCard from '../components/FeatureCard';
import './Services.css';

const features = [
  {
    name: 'Recipe Finder',
    description: 'Find recipes based on ingredients you have at home. Get personalized suggestions instantly.',
    icon: '🍳',
    path: '/services/recipe-finder',
    accent: 'var(--color-accent)',
  },
  {
    name: 'Water Tracker',
    description: 'Track your daily water intake, set hydration goals, and get reminders to stay hydrated.',
    icon: '💧',
    path: '/services/water-tracker',
    accent: 'var(--color-accent3)',
  },
  {
    name: 'My Progress',
    description: 'View your daily and weekly nutrition progress, calories, macros, and meal logs.',
    icon: '📈',
    path: '/services/my-progress',
    accent: '#bafff6',
  },
  {
    name: 'Grocery List',
    description: 'Generate smart shopping lists from your meal plans and track purchased items easily.',
    icon: '🛒',
    path: '/services/grocery-list',
    accent: 'var(--color-accent2)',
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <h1 className="services-title" style={{ color: '#ffb347', textShadow: '0 0 12px #ffb34788' }}>Our Services</h1>
      <div className="services-features">
        {features.map((feature) => (
          <FeatureCard
            key={feature.name}
            icon={feature.icon}
            name={feature.name}
            description={feature.description}
            path={feature.path}
            accent={feature.accent}
          />
        ))}
      </div>
    </div>
  );
} 