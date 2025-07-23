import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturePages.css';

const recipeGroups = [
  {
    emoji: '🍳',
    label: 'Recipes with Egg',
    color: 'egg',
    recipes: [
      {
        name: 'Masala Omelette',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Egg', 'Onion', 'Tomato', 'Green chili', 'Coriander', 'Salt'],
        calories: 180, protein: 12, fat: 14, carbs: 4, time: '10 min',
      },
      {
        name: 'Egg Curry',
        image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Egg', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Garam masala'],
        calories: 220, protein: 14, fat: 16, carbs: 8, time: '25 min',
      },
      {
        name: 'Boiled Egg Sandwich',
        image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Boiled Egg', 'Bread (wheat)', 'Mayonnaise', 'Onion', 'Pepper', 'Salt'],
        calories: 250, protein: 13, fat: 10, carbs: 28, time: '8 min',
      },
      {
        name: 'Egg Fried Rice',
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Egg', 'Cooked rice', 'Soy sauce', 'Spring onion', 'Garlic', 'Carrot'],
        calories: 320, protein: 10, fat: 8, carbs: 45, time: '15 min',
      },
    ],
  },
  {
    emoji: '🧀',
    label: 'Recipes with Paneer',
    color: 'paneer',
    recipes: [
      {
        name: 'Palak Paneer',
        image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Paneer', 'Palak (spinach)', 'Tomato', 'Onion', 'Cumin (jeera)', 'Green chili'],
        calories: 280, protein: 14, fat: 18, carbs: 10, time: '20 min',
      },
      {
        name: 'Paneer Bhurji',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Paneer', 'Tomato', 'Onion', 'Turmeric', 'Chili powder', 'Coriander'],
        calories: 210, protein: 12, fat: 14, carbs: 8, time: '15 min',
      },
      {
        name: 'Paneer Paratha',
        image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Paneer', 'Wheat flour', 'Coriander', 'Green chili', 'Cumin seeds', 'Ghee'],
        calories: 320, protein: 10, fat: 12, carbs: 38, time: '18 min',
      },
      {
        name: 'Paneer Tikka',
        image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Paneer', 'Yogurt', 'Red chili powder', 'Turmeric', 'Onion', 'Capsicum'],
        calories: 250, protein: 13, fat: 15, carbs: 9, time: '22 min',
      },
    ],
  },
  {
    emoji: '🍗',
    label: 'Recipes with Chicken',
    color: 'chicken',
    recipes: [
      {
        name: 'Chicken Curry',
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Chicken', 'Onion', 'Tomato', 'Ginger garlic paste', 'Chili powder', 'Garam masala'],
        calories: 340, protein: 24, fat: 16, carbs: 12, time: '30 min',
      },
      {
        name: 'Grilled Chicken',
        image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Chicken', 'Yogurt', 'Lemon', 'Garlic', 'Pepper', 'Oregano'],
        calories: 220, protein: 28, fat: 7, carbs: 2, time: '20 min',
      },
      {
        name: 'Chicken Biryani',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Chicken', 'Rice', 'Onion', 'Curd', 'Mint', 'Biryani masala'],
        calories: 480, protein: 28, fat: 16, carbs: 60, time: '40 min',
      },
      {
        name: 'Chicken Sandwich',
        image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Chicken (boiled/shredded)', 'Bread', 'Mayonnaise', 'Lettuce', 'Tomato', 'Pepper'],
        calories: 330, protein: 18, fat: 8, carbs: 38, time: '10 min',
      },
    ],
  },
  {
    emoji: '🥛',
    label: 'Recipes with Milk',
    color: 'milk',
    recipes: [
      {
        name: 'Rice Kheer (Milk Pudding)',
        image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Milk', 'Rice', 'Sugar', 'Cardamom', 'Almonds', 'Raisins'],
        calories: 210, protein: 7, fat: 6, carbs: 38, time: '25 min',
      },
      {
        name: 'Masala Chai',
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Milk', 'Tea leaves', 'Ginger', 'Cardamom', 'Clove', 'Sugar'],
        calories: 90, protein: 3, fat: 3, carbs: 15, time: '10 min',
      },
      {
        name: 'Fruit Custard',
        image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Milk', 'Custard powder', 'Sugar', 'Apple', 'Banana', 'Pomegranate'],
        calories: 180, protein: 4, fat: 3, carbs: 36, time: '15 min',
      },
      {
        name: 'Milkshake (Banana)',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Milk', 'Banana', 'Sugar', 'Cardamom', 'Ice cubes', 'Honey (optional)'],
        calories: 160, protein: 5, fat: 2, carbs: 32, time: '7 min',
      },
    ],
  },
  {
    emoji: '🍚',
    label: 'Recipes with Rice or Wheat',
    color: 'rice',
    recipes: [
      {
        name: 'Vegetable Pulao',
        image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Rice', 'Carrot', 'Beans', 'Onion', 'Cumin', 'Ghee'],
        calories: 280, protein: 6, fat: 8, carbs: 48, time: '20 min',
      },
      {
        name: 'Jeera Rice',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Rice', 'Cumin seeds', 'Ghee', 'Bay leaf', 'Salt', 'Water'],
        calories: 210, protein: 4, fat: 5, carbs: 42, time: '15 min',
      },
      {
        name: 'Wheat Roti (Chapati)',
        image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Wheat flour', 'Water', 'Salt', 'Ghee', 'Rolling pin', 'Tava'],
        calories: 120, protein: 3, fat: 2, carbs: 24, time: '10 min',
      },
      {
        name: 'Stuffed Aloo Paratha',
        image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
        ingredients: ['Wheat flour', 'Boiled potato', 'Green chili', 'Coriander', 'Onion', 'Salt'],
        calories: 260, protein: 6, fat: 7, carbs: 44, time: '18 min',
      },
    ],
  },
];

function filterRecipes(groups, ingredientFilter, goalFilter) {
  let filteredGroups = groups;
  if (ingredientFilter.length > 0) {
    filteredGroups = groups.filter(g => ingredientFilter.some(i => g.emoji.toLowerCase().includes(i) || g.label.toLowerCase().includes(i) || g.recipes.some(r => r.ingredients.map(ing => ing.toLowerCase()).includes(i))));
  }
  if (goalFilter && goalFilter !== 'All') {
    filteredGroups = groups.filter(g => g.label.toLowerCase().includes(goalFilter.toLowerCase()) || g.recipes.some(r => r.name.toLowerCase().includes(goalFilter.toLowerCase())));
  }
  return filteredGroups;
}

function addToMealPlan(recipe) {
  const prev = JSON.parse(localStorage.getItem('selectedRecipes') || '[]');
  localStorage.setItem('selectedRecipes', JSON.stringify([...prev, recipe]));
  const prevGrocery = JSON.parse(localStorage.getItem('groceryList') || '[]');
  localStorage.setItem('groceryList', JSON.stringify([...prevGrocery, ...recipe.ingredients]));
}

export default function RecipeFinder() {
  const [ingredientInput, setIngredientInput] = useState('');
  const [ingredientFilter, setIngredientFilter] = useState([]);
  const [goal, setGoal] = useState('All');
  const navigate = useNavigate();

  const handleIngredientInput = (e) => setIngredientInput(e.target.value);
  const handleIngredientAdd = () => {
    const items = ingredientInput.split(',').map(i => i.trim().toLowerCase()).filter(Boolean);
    setIngredientFilter(items);
  };
  const handleGoalChange = (e) => setGoal(e.target.value);

  const filteredGroups = filterRecipes(recipeGroups, ingredientFilter, goal);

  const handleAddToMealPlan = (recipe) => {
    addToMealPlan(recipe);
    navigate('/services/grocery-list');
  };

  return (
    <div className="feature-page-bg">
      <section className="feature-hero">
        <h1 className="feature-title neon-green">Recipe Finder</h1>
        <p className="feature-sub">Discover recipes based on your ingredients or dietary goals</p>
        <div className="recipe-filters-row">
          <div className="recipe-filter-card">
            <div className="filter-title">Search by Ingredients</div>
            <input className="feature-input" type="text" placeholder="e.g. egg, paneer, chicken, milk, rice" value={ingredientInput} onChange={handleIngredientInput} />
            <button className="feature-btn-gradient" style={{ marginTop: 8 }} onClick={handleIngredientAdd}>Find Recipes</button>
          </div>
          <div className="recipe-filter-card">
            <div className="filter-title">Browse by Main Ingredient</div>
            <select className="feature-input" value={goal} onChange={handleGoalChange}>
              <option value="All">All</option>
              {recipeGroups.map(g => <option key={g.label} value={g.label}>{g.label}</option>)}
            </select>
          </div>
        </div>
      </section>
      <div className="recipe-group-list">
        {filteredGroups.length === 0 && (
          <div style={{ color: '#ff5eae', fontWeight: 600, margin: '2em auto' }}>No recipes found. Try different ingredients or a different main ingredient.</div>
        )}
        {filteredGroups.map((group) => (
          <div key={group.label} className="recipe-group">
            <div className="recipe-group-header">
              <span className="recipe-group-emoji">{group.emoji}</span>
              <span className="recipe-group-title">{group.label} ({group.recipes.length})</span>
            </div>
            <div className="recipe-grid">
              {group.recipes.map((r) => (
                <div className={`recipe-card badge-${group.color}`} key={r.name}>
                  <img src={r.image} alt={r.name} className="recipe-img" />
                  <div className="recipe-title-row">
                    <div className="recipe-title">{r.name}</div>
                  </div>
                  <div className="recipe-ingredients-list">{r.ingredients.join(', ')}</div>
                  <div className="recipe-macros">
                    <span>🔥 {r.calories} cal</span>
                    <span>💪 {r.protein}g</span>
                    <span>🍳 {r.fat}g</span>
                    <span>🍞 {r.carbs}g</span>
                    <span>🕒 {r.time}</span>
                  </div>
                  <button className="feature-btn-gradient" onClick={() => handleAddToMealPlan(r)}>
                    + Add Recipe
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 