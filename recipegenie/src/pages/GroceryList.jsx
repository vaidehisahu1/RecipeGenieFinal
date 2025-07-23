import React from 'react';
import './FeaturePages.css';

export default function GroceryList() {
  return (
    <div className="feature-page-bg">
      <section className="feature-hero">
        <h1 className="feature-title neon-pink">Smart Grocery List</h1>
        <p className="feature-sub">Organize your shopping list and track your purchases</p>
      </section>
      <div className="feature-card">
        <h2>Add New Item</h2>
        <div className="grocery-input-row">
          <input className="feature-input" type="text" placeholder="Item name" />
          <input className="feature-input" type="text" placeholder="Quantity" />
          <select className="feature-input">
            <option>Other</option>
            <option>Proteins</option>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Dairy</option>
            <option>Grains</option>
            <option>Snacks</option>
          </select>
          <button className="feature-btn-gradient">+ Add Item</button>
        </div>
        <div className="grocery-list-row">
          <div className="grocery-list-item">CHEESE <span className="grocery-tag">Proteins</span></div>
          <div className="grocery-list-item">Chicken Breast <span className="grocery-tag">Proteins</span></div>
        </div>
      </div>
    </div>
  );
} 