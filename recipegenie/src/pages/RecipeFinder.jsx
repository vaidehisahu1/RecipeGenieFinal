import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturePages.css';

const recipes = [
  // Egg
  { name: 'Masala Omelette', emoji: '🍳', main: 'Egg', goal: 'Easy to Make', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', ingredients: ['Egg', 'Onion', 'Tomato', 'Chili', 'Salt', 'Coriander'], calories: 180, protein: 12, fat: 14, carbs: 4, time: '10 min' },
  { name: 'Egg Fried Rice', emoji: '🍳', main: 'Egg', goal: 'Family Meal', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', ingredients: ['Egg', 'Rice', 'Onion', 'Soy sauce', 'Carrot', 'Garlic'], calories: 320, protein: 10, fat: 8, carbs: 45, time: '15 min' },
  { name: 'Egg Curry', emoji: '🍳', main: 'Egg', goal: 'Weight Gain', image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80', ingredients: ['Egg', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Spices'], calories: 220, protein: 14, fat: 16, carbs: 8, time: '25 min' },
  { name: 'Boiled Egg Salad', emoji: '🍳', main: 'Egg', goal: 'Weight Loss', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80', ingredients: ['Egg', 'Cucumber', 'Lettuce', 'Lemon', 'Chili', 'Salt'], calories: 120, protein: 10, fat: 7, carbs: 3, time: '8 min' },
  { name: 'Egg Sandwich', emoji: '🍳', main: 'Egg', goal: 'Quick Snack', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', ingredients: ['Egg', 'Bread', 'Onion', 'Mayo', 'Pepper', 'Salt'], calories: 250, protein: 13, fat: 10, carbs: 28, time: '8 min' },
  // Chicken
  { name: 'Chicken Curry', emoji: '🍗', main: 'Chicken', goal: 'Family Meal', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', ingredients: ['Chicken', 'Onion', 'Tomato', 'Ginger', 'Spices', 'Oil'], calories: 340, protein: 24, fat: 16, carbs: 12, time: '30 min' },
  { name: 'Grilled Chicken', emoji: '🍗', main: 'Chicken', goal: 'Weight Loss', image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80', ingredients: ['Chicken', 'Lemon', 'Garlic', 'Pepper', 'Salt', 'Olive oil'], calories: 220, protein: 28, fat: 7, carbs: 2, time: '20 min' },
  { name: 'Chicken Fried Rice', emoji: '🍗', main: 'Chicken', goal: 'Easy to Make', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80', ingredients: ['Chicken', 'Rice', 'Onion', 'Garlic', 'Soy sauce', 'Veggies'], calories: 350, protein: 16, fat: 10, carbs: 48, time: '18 min' },
  { name: 'Chicken Wrap', emoji: '🍗', main: 'Chicken', goal: 'Quick Snack', image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80', ingredients: ['Chicken', 'Roti', 'Onion', 'Tomato', 'Mayo', 'Lettuce'], calories: 270, protein: 14, fat: 8, carbs: 32, time: '12 min' },
  { name: 'Butter Chicken', emoji: '🍗', main: 'Chicken', goal: 'Weight Gain', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', ingredients: ['Chicken', 'Cream', 'Butter', 'Tomato', 'Spices', 'Milk'], calories: 420, protein: 22, fat: 24, carbs: 18, time: '35 min' },
  // Milk
  { name: 'Kheer', emoji: '🥛', main: 'Milk', goal: 'Family Meal', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80', ingredients: ['Milk', 'Rice', 'Sugar', 'Cardamom', 'Almonds', 'Raisins'], calories: 210, protein: 7, fat: 6, carbs: 38, time: '25 min' },
  { name: 'Banana Shake', emoji: '🥛', main: 'Milk', goal: 'Weight Gain', image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80', ingredients: ['Milk', 'Banana', 'Sugar', 'Cardamom', 'Ice'], calories: 180, protein: 5, fat: 2, carbs: 32, time: '7 min' },
  { name: 'Fruit Custard', emoji: '🥛', main: 'Milk', goal: 'Quick Snack', image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80', ingredients: ['Milk', 'Custard powder', 'Apple', 'Banana', 'Sugar', 'Grape'], calories: 160, protein: 4, fat: 3, carbs: 36, time: '15 min' },
  { name: 'Spiced Warm Milk', emoji: '🥛', main: 'Milk', goal: 'Easy to Make', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', ingredients: ['Milk', 'Cardamom', 'Turmeric', 'Honey', 'Pepper', 'Ginger'], calories: 120, protein: 4, fat: 3, carbs: 18, time: '8 min' },
  { name: 'Milk Oats Bowl', emoji: '🥛', main: 'Milk', goal: 'Weight Loss', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', ingredients: ['Milk', 'Oats', 'Apple', 'Banana', 'Chia', 'Honey'], calories: 190, protein: 6, fat: 3, carbs: 32, time: '10 min' },
  // Rice/Wheat/Fruit
  { name: 'Lemon Rice', emoji: '🍚', main: 'Rice', goal: 'Less Oil', image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80', ingredients: ['Rice', 'Lemon', 'Mustard seeds', 'Chili', 'Curry leaves', 'Salt'], calories: 210, protein: 4, fat: 5, carbs: 42, time: '15 min' },
  { name: 'Vegetable Rice Bowl', emoji: '🍚', main: 'Rice', goal: 'Weight Loss', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', ingredients: ['Rice', 'Carrot', 'Beans', 'Salt', 'Chili', 'Onion'], calories: 180, protein: 4, fat: 1, carbs: 38, time: '12 min' },
  { name: 'Mango Lassi', emoji: '🥛', main: 'Milk', goal: 'Weight Gain', image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80', ingredients: ['Curd', 'Milk', 'Mango', 'Sugar', 'Cardamom', 'Ice'], calories: 220, protein: 6, fat: 4, carbs: 38, time: '10 min' },
  { name: 'Fruit Salad', emoji: '🍚', main: 'Fruit', goal: 'Less Oil', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80', ingredients: ['Apple', 'Banana', 'Papaya', 'Orange', 'Mint', 'Lemon'], calories: 110, protein: 2, fat: 1, carbs: 24, time: '8 min' },
  { name: 'Rice Fruit Bowl', emoji: '🍚', main: 'Rice', goal: 'Easy to Make', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', ingredients: ['Rice', 'Banana', 'Milk', 'Honey', 'Cardamom', 'Almonds'], calories: 160, protein: 3, fat: 2, carbs: 32, time: '10 min' },
];

const goalOptions = ['All', 'Weight Loss', 'Weight Gain', 'Family Meal', 'Quick Snack', 'Less Oil', 'Easy to Make'];
const mainOptions = ['All', 'Egg', 'Chicken', 'Milk', 'Rice', 'Fruit'];

function filterRecipes(recipes, ingredientFilter, goalFilter, mainFilter) {
  let filtered = recipes;
  if (ingredientFilter.length > 0) {
    filtered = filtered.filter(r => ingredientFilter.every(i => r.ingredients.map(ing => ing.toLowerCase()).includes(i)));
  }
  if (goalFilter && goalFilter !== 'All') {
    filtered = filtered.filter(r => r.goal === goalFilter);
  }
  if (mainFilter && mainFilter !== 'All') {
    filtered = filtered.filter(r => r.main === mainFilter);
  }
  return filtered;
}

function addToMealPlan(recipe) {
  localStorage.setItem('selectedRecipes', JSON.stringify([recipe]));
  localStorage.setItem('groceryList', JSON.stringify(recipe.ingredients));
}

export default function RecipeFinder() {
  const [ingredientInput, setIngredientInput] = useState('');
  const [ingredientFilter, setIngredientFilter] = useState([]);
  const [goal, setGoal] = useState('All');
  const [main, setMain] = useState('All');
  const navigate = useNavigate();

  const handleIngredientInput = (e) => setIngredientInput(e.target.value);
  const handleIngredientAdd = () => {
    const items = ingredientInput.split(',').map(i => i.trim().toLowerCase()).filter(Boolean);
    setIngredientFilter(items);
  };
  const handleGoalChange = (e) => setGoal(e.target.value);
  const handleMainChange = (e) => setMain(e.target.value);

  const filteredRecipes = filterRecipes(recipes, ingredientFilter, goal, main);

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
            <input className="feature-input" type="text" placeholder="e.g. egg, chicken, milk, rice" value={ingredientInput} onChange={handleIngredientInput} />
            <button className="feature-btn-gradient" style={{ marginTop: 8 }} onClick={handleIngredientAdd}>Find Recipes</button>
          </div>
          <div className="recipe-filter-card">
            <div className="filter-title">Browse by Goal</div>
            <select className="feature-input" value={goal} onChange={handleGoalChange}>
              {goalOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="recipe-filter-card">
            <div className="filter-title">Browse by Main Ingredient</div>
            <select className="feature-input" value={main} onChange={handleMainChange}>
              {mainOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
        </div>
      </section>
      <div className="recipe-grid">
        {filteredRecipes.length === 0 && (
          <div style={{ color: '#ff5eae', fontWeight: 600, margin: '2em auto' }}>No recipes found. Try different ingredients or a different goal.</div>
        )}
        {filteredRecipes.map((r) => (
          <div className={`recipe-card badge-${r.goal.replace(/\s/g, '').toLowerCase()}`} key={r.name}>
            <img src={r.image} alt={r.name} className="recipe-img" />
            <div className="recipe-title-row">
              <span className="recipe-badge" style={{ background: '#232946', color: '#baff39', marginRight: 8 }}>{r.emoji}</span>
              <div className="recipe-title">{r.name}</div>
              <span className={`recipe-badge badge-${r.goal.replace(/\s/g, '').toLowerCase()}`}>{r.goal}</span>
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
  );
} 