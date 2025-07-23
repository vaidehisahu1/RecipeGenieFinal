import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturePages.css';

function groupIngredients(ingredients) {
  // Group and dedupe, count occurrences
  const map = {};
  ingredients.forEach((item) => {
    const key = item.trim().toLowerCase();
    if (!key) return;
    map[key] = (map[key] || 0) + 1;
  });
  return Object.entries(map).map(([name, count]) => ({ name, count }));
}

export default function GroceryList() {
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem('groceryList') || '[]');
    setItems(groupIngredients(raw));
  }, []);

  const handleCheck = (name) => {
    setChecked((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handlePickMore = () => {
    navigate('/services/recipe-finder');
  };

  return (
    <div className="feature-page-bg">
      <section className="feature-hero">
        <h1 className="feature-title neon-pink">Shopping List</h1>
        <p className="feature-sub">Check off what you already have, or pick more recipes!</p>
      </section>
      <div className="feature-card" style={{ maxWidth: 700 }}>
        <h2 style={{ color: '#baff39', marginBottom: 18 }}>What to Buy ({items.length} items)</h2>
        <div className="grocery-list-grid">
          {items.length === 0 && <div style={{ color: '#ff5eae', fontWeight: 600 }}>No items yet. Pick a recipe!</div>}
          {items.map((item) => (
            <label key={item.name} className={`grocery-list-checkbox${checked[item.name] ? ' checked' : ''}`}>
              <input
                type="checkbox"
                checked={!!checked[item.name]}
                onChange={() => handleCheck(item.name)}
              />
              <span style={{ textTransform: 'capitalize' }}>{item.name}{item.count > 1 ? ` x${item.count}` : ''}</span>
            </label>
          ))}
        </div>
        <button className="feature-btn-gradient" style={{ marginTop: 24 }} onClick={handlePickMore}>Pick More Recipes</button>
      </div>
    </div>
  );
} 