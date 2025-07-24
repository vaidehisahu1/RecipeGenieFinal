import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FeaturePages.css';

const recipes = [
  // 🥚 Egg-Based Recipes
  { name: 'Zesty Egg Bowl', emoji: '🥚', main: 'Egg', goal: 'Weight Loss', ingredients: ['egg', 'spinach', 'garlic', 'tomato', 'onion', 'mint'], image: '', calories: 340, protein: 23, fat: 8, carbs: 44, time: '' },
  { name: 'Creamy Egg Wrap', emoji: '🥚', main: 'Egg', goal: 'Weight Gain', ingredients: ['egg', 'cheese', 'mayo', 'bread', 'tomato', 'onion'], image: '', calories: 350, protein: 20, fat: 15, carbs: 30, time: '' },
  { name: 'Creamy Egg Curry', emoji: '🥚', main: 'Egg', goal: 'Family Meal', ingredients: ['egg', 'onion', 'tomato', 'cream', 'ginger', 'garlic'], image: '', calories: 300, protein: 15, fat: 20, carbs: 15, time: '' },
  { name: 'Quick Egg Bites', emoji: '🥚', main: 'Egg', goal: 'Quick Snack', ingredients: ['egg', 'tomato', 'lemon juice', 'onion', 'spinach', 'garlic'], image: '', calories: 250, protein: 15, fat: 18, carbs: 10, time: '' },
  { name: 'Grilled Egg Salad', emoji: '🥚', main: 'Egg', goal: 'Quick Snack', ingredients: ['egg', 'garlic', 'mustard seeds', 'oil', 'cinnamon', 'paneer'], image: '', calories: 300, protein: 20, fat: 18, carbs: 12, time: '' },
  { name: 'Fruity Egg Delight', emoji: '🥚', main: 'Egg', goal: 'Less Oil', ingredients: ['egg', 'fruit', 'onion', 'cinnamon', 'coriander', 'curd'], image: '', calories: 280, protein: 12, fat: 16, carbs: 20, time: '' },
  { name: 'Simple Egg Toast', emoji: '🥚', main: 'Egg', goal: 'Easy to Make', ingredients: ['egg', 'bread', 'butter', 'salt', 'pepper', 'tomato'], image: '', calories: 200, protein: 12, fat: 16, carbs: 10, time: '' },
  { name: 'Rice and Egg Bowl', emoji: '🥚', main: 'Egg', goal: 'Easy to Make', ingredients: ['rice', 'egg', 'onion', 'chili', 'tomato', 'coriander'], image: '', calories: 500, protein: 18, fat: 15, carbs: 70, time: '' },

  // 🍗 Chicken-Based Recipes
  { name: 'Spicy Chicken Salad', emoji: '🍗', main: 'Chicken', goal: 'Weight Loss', ingredients: ['chicken', 'lettuce', 'tomato', 'onion', 'lemon juice', 'pepper'], image: '', calories: 320, protein: 30, fat: 12, carbs: 10, time: '' },
  { name: 'Grilled Chicken Curry', emoji: '🍗', main: 'Chicken', goal: 'Weight Gain', ingredients: ['chicken', 'butter', 'tomato', 'ginger', 'garlic', 'cream'], image: '', calories: 400, protein: 28, fat: 18, carbs: 20, time: '' },
  { name: 'Spicy Chicken Rice Bowl', emoji: '🍗', main: 'Chicken', goal: 'Family Meal', ingredients: ['chicken', 'rice', 'onion', 'garlic', 'tomato', 'curd'], image: '', calories: 520, protein: 27, fat: 16, carbs: 55, time: '' },
  { name: 'Zesty Chicken Toast', emoji: '🍗', main: 'Chicken', goal: 'Family Meal', ingredients: ['chicken', 'bread', 'onion', 'mayo', 'chili flakes', 'garlic'], image: '', calories: 350, protein: 22, fat: 14, carbs: 28, time: '' },
  { name: 'Minimal Chicken Stir-fry', emoji: '🍗', main: 'Chicken', goal: 'Less Oil', ingredients: ['chicken', 'capsicum', 'garlic', 'ginger', 'chili', 'lemon juice'], image: '', calories: 280, protein: 24, fat: 10, carbs: 15, time: '' },
  { name: 'Basic Chicken Skillet', emoji: '🍗', main: 'Chicken', goal: 'Easy to Make', ingredients: ['chicken', 'onion', 'garlic', 'tomato', 'oil', 'salt'], image: '', calories: 300, protein: 26, fat: 12, carbs: 18, time: '' },

  // 🥛 Milk-Based Recipes
  { name: 'Creamy Milk Smoothie', emoji: '🥛', main: 'Milk', goal: 'Weight Gain', ingredients: ['milk', 'banana', 'peanut butter', 'honey', 'curd', 'cardamom'], image: '', calories: 350, protein: 14, fat: 12, carbs: 42, time: '' },
  { name: 'Sweet Rice Delight', emoji: '🥛', main: 'Milk', goal: 'Weight Gain', ingredients: ['rice', 'milk', 'dry fruits', 'sugar', 'cardamom', 'ghee'], image: '', calories: 320, protein: 10, fat: 10, carbs: 50, time: '' },
  { name: 'Healthy Milk Salad', emoji: '🥛', main: 'Milk', goal: 'Quick Snack', ingredients: ['milk', 'salt', 'onion', 'pepper', 'curd', 'cheese'], image: '', calories: 260, protein: 12, fat: 10, carbs: 20, time: '' },
  { name: 'Sweet Milk Porridge', emoji: '🥛', main: 'Milk', goal: 'Easy to Make', ingredients: ['milk', 'oats', 'sugar', 'dry fruits', 'cardamom', 'cinnamon'], image: '', calories: 290, protein: 11, fat: 9, carbs: 45, time: '' },

  // 🍚 Rice-Based Recipes
  { name: 'Healthy Rice Delight', emoji: '🍚', main: 'Rice', goal: 'Weight Loss', ingredients: ['rice', 'capsicum', 'carrot', 'lemon juice', 'onion', 'chili'], image: '', calories: 310, protein: 9, fat: 6, carbs: 58, time: '' },
  { name: 'Healthy Fruit Rice Skillet', emoji: '🍚', main: 'Rice', goal: 'Family Meal', ingredients: ['rice', 'fruit', 'cinnamon', 'honey', 'cardamom', 'butter'], image: '', calories: 350, protein: 8, fat: 7, carbs: 62, time: '' },
  { name: 'Steamed Rice Bites', emoji: '🍚', main: 'Rice', goal: 'Less Oil', ingredients: ['rice', 'curd', 'ginger', 'mustard seeds', 'green chili', 'lemon juice'], image: '', calories: 250, protein: 6, fat: 4, carbs: 48, time: '' },

  // 🍎 Fruit-Based Recipes
  { name: 'Creamy Fruit Salad', emoji: '🍓', main: 'Fruit', goal: 'Weight Loss', ingredients: ['fruit', 'curd', 'mint', 'honey', 'cinnamon', 'cardamom'], image: '', calories: 270, protein: 6, fat: 12, carbs: 35, time: '' },
  { name: 'Fruit Yogurt Mix', emoji: '🍓', main: 'Fruit', goal: 'Easy to Make', ingredients: ['fruit', 'curd', 'honey', 'mint', 'cinnamon', 'cardamom'], image: '', calories: 240, protein: 8, fat: 8, carbs: 32, time: '' },
];

const goalOptions = ['All', 'Weight Loss', 'Weight Gain', 'Family Meal', 'Quick Snack', 'Less Oil', 'Easy to Make'];
const mainOptions = ['All', 'Egg', 'Chicken', 'Milk', 'Rice', 'Fruit'];

function filterRecipes(recipes, ingredientFilter, goalFilter, mainFilter) {
  // If searching by a single main ingredient, return recipes in the user's specified order for that main
  if (ingredientFilter.length === 1) {
    const mainMap = {
      egg: 'Egg',
      chicken: 'Chicken',
      milk: 'Milk',
      rice: 'Rice',
      fruit: 'Fruit',
      fruits: 'Fruit',
    };
    const mainKey = ingredientFilter[0].toLowerCase();
    if (mainMap[mainKey]) {
      // Return recipes for that main in the order they appear in the array
      return recipes.filter(r => r.main === mainMap[mainKey]);
    }
  }
  // Otherwise, use the existing ingredient filter logic
  let filtered = recipes;
  if (ingredientFilter.length > 0) {
    filtered = filtered.filter(r => ingredientFilter.every(i => r.ingredients.map(ing => ing.toLowerCase()).includes(i)));
  }
  // Filtering logic: intersection or single filter
  if (goalFilter !== 'All' && mainFilter !== 'All') {
    filtered = filtered.filter(r => r.goal === goalFilter && r.main === mainFilter);
  } else if (goalFilter !== 'All') {
    filtered = filtered.filter(r => r.goal === goalFilter);
  } else if (mainFilter !== 'All') {
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
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo-icon">&#128717;</span>
          <span className="logo-text">RecipeGenie</span>
        </div>
        <nav className="navbar-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services/recipe-finder" className="nav-link active">Recipe Finder</Link>
          <Link to="/services/water-tracker" className="nav-link">Water Tracker</Link>
          <Link to="/services/my-progress" className="nav-link">Progress Tracker</Link>
          <Link to="/services/grocery-list" className="nav-link">Grocery List</Link>
        </nav>
        <div className="navbar-right">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </header>

      {/* Main Content */}
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
          <div style={{ color: '#ff5eae', fontWeight: 600, margin: '2em auto' }}>No recipes found. Try a new combination.</div>
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
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo neon-gradient">RecipeGenie</div>
            <div className="footer-desc">Pioneering the future with cutting-edge technology solutions that illuminate possibilities.</div>
            <div className="footer-socials"></div>
          </div>
          <div className="footer-links">
            <div className="footer-links-title neon-gradient">Quick Links</div>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <div className="footer-contact">
            <div className="footer-links-title neon-gradient">Contact Info</div>
            <div>contact@recipegenie.com</div>
            <div>+1 (555) 123-4567</div>
            <div>San Francisco, CA</div>
          </div>
          <div className="footer-newsletter">
            <div className="footer-links-title neon-gradient">Stay Updated</div>
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">© 2025 RecipeGenie. All rights reserved.</div>
      </footer>
    </div>
  );
} 