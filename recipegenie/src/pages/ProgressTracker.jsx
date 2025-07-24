import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeaturePages.css';

const foodOptions = [
  { name: 'Zesty Egg Bowl', calories: 340, protein: 23, fat: 8, carbs: 44 },
  { name: 'Creamy Egg Wrap', calories: 350, protein: 20, fat: 15, carbs: 30 },
  { name: 'Creamy Egg Curry', calories: 300, protein: 15, fat: 20, carbs: 15 },
  { name: 'Quick Egg Bites', calories: 250, protein: 15, fat: 18, carbs: 10 },
  { name: 'Grilled Egg Salad', calories: 300, protein: 20, fat: 18, carbs: 12 },
  { name: 'Fruity Egg Delight', calories: 280, protein: 12, fat: 16, carbs: 20 },
  { name: 'Simple Egg Toast', calories: 200, protein: 12, fat: 16, carbs: 10 },
  { name: 'Rice and Egg Bowl', calories: 500, protein: 18, fat: 15, carbs: 70 },
  { name: 'Spicy Chicken Salad', calories: 320, protein: 30, fat: 12, carbs: 10 },
  { name: 'Grilled Chicken Curry', calories: 400, protein: 28, fat: 18, carbs: 20 },
  { name: 'Spicy Chicken Rice Bowl', calories: 520, protein: 27, fat: 16, carbs: 55 },
  { name: 'Zesty Chicken Toast', calories: 350, protein: 22, fat: 14, carbs: 28 },
  { name: 'Minimal Chicken Stir-fry', calories: 280, protein: 24, fat: 10, carbs: 15 },
  { name: 'Basic Chicken Skillet', calories: 300, protein: 26, fat: 12, carbs: 18 },
  { name: 'Creamy Milk Smoothie', calories: 350, protein: 14, fat: 12, carbs: 42 },
  { name: 'Sweet Rice Delight', calories: 320, protein: 10, fat: 10, carbs: 50 },
  { name: 'Healthy Milk Salad', calories: 260, protein: 12, fat: 10, carbs: 20 },
  { name: 'Sweet Milk Porridge', calories: 290, protein: 11, fat: 9, carbs: 45 },
  { name: 'Healthy Rice Delight', calories: 310, protein: 9, fat: 6, carbs: 58 },
  { name: 'Healthy Fruit Rice Skillet', calories: 350, protein: 8, fat: 7, carbs: 62 },
  { name: 'Steamed Rice Bites', calories: 250, protein: 6, fat: 4, carbs: 48 },
  { name: 'Rice and Egg Bowl', calories: 500, protein: 18, fat: 15, carbs: 70 },
  { name: 'Creamy Fruit Salad', calories: 270, protein: 6, fat: 12, carbs: 35 },
  { name: 'Fruit Yogurt Mix', calories: 240, protein: 8, fat: 8, carbs: 32 },
  { name: 'Fruity Egg Delight', calories: 280, protein: 12, fat: 16, carbs: 20 },
];
const dailyGoals = { calories: 2000, protein: 120, carbs: 250, fat: 65 };
const achievementsList = [
  { icon: '🔥', label: '7-Day Streak', desc: 'Logged meals for 7 consecutive days', glow: true },
  { icon: '🧘‍♂️', label: 'Balanced Eater', desc: 'Maintained balanced macros' },
  { icon: '💧', label: 'Hydration Hero', desc: 'Met water goal 5 days this week' },
  { icon: '🎯', label: 'Goal Crusher', desc: 'Hit calorie goals 6 out of 7 days' },
];
const weeklyBase = {
  avgCalories: 1750,
  daysOnTrack: 5,
  avgWater: 1800,
  streak: 7,
};

export default function ProgressTracker() {
  const [view, setView] = useState('daily');
  const [meals, setMeals] = useState([
    { ...foodOptions[0], meal: 'Breakfast' },
    { ...foodOptions[1], meal: 'Lunch' },
    { ...foodOptions[2], meal: 'Dinner' },
  ]);
  const [selectedFood, setSelectedFood] = useState('');
  const [selectedMeal, setSelectedMeal] = useState('Breakfast');

  // If user comes from GroceryList with a completed meal, pre-select that recipe and prompt for meal type before adding
  useEffect(() => {
    const completed = localStorage.getItem('todaysMealsCompleted') === 'true';
    const todaysMeals = JSON.parse(localStorage.getItem('todaysMeals') || '[]');
    if (completed && todaysMeals.length > 0) {
      // Only add if not already present
      setMeals((prev) => {
        const names = prev.map(m => m.name);
        const toAdd = todaysMeals.filter(m => !names.includes(m.name));
        return [...prev, ...toAdd.map(m => ({ ...m, meal: 'Lunch' }))];
      });
      localStorage.setItem('todaysMealsCompleted', 'false');
    }
  }, []);

  // Calculate totals
  const totals = meals.reduce(
    (acc, m) => {
      acc.calories += m.calories;
      acc.protein += m.protein;
      acc.carbs += m.carbs;
      acc.fat += m.fat;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  // Add meal from dropdown
  const addMeal = () => {
    const food = foodOptions.find(f => f.name === selectedFood);
    if (!food) return;
    setMeals([...meals, { ...food, meal: selectedMeal }]);
    setSelectedFood('');
    setSelectedMeal('Breakfast');
  };
  const removeMeal = (idx) => setMeals(meals.filter((_, i) => i !== idx));

  // Weekly summary reflects dummy data + current daily
  const weeklySummary = {
    ...weeklyBase,
    avgCalories: Math.round((weeklyBase.avgCalories * 6 + totals.calories) / 7),
    daysOnTrack: weeklyBase.daysOnTrack + (totals.calories > 0 ? 1 : 0),
  };

  // Achievements grid (same for both views)
  function AchievementsGrid() {
    return (
      <div className="achievements-section">
        <h3 style={{ color: '#fff', marginBottom: 18 }}>Achievements</h3>
        <div className="achievements-grid">
          {achievementsList.map((a) => (
            <div className={`achievement-card2${a.glow ? ' neon-glow2' : ''}`} key={a.label}>
              <div className="achievement-icon">{a.icon}</div>
              <div className="achievement-title">{a.label}</div>
              <div className="achievement-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

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
          <Link to="/services/recipe-finder" className="nav-link">Recipe Finder</Link>
          <Link to="/services/water-tracker" className="nav-link">Water Tracker</Link>
          <Link to="/services/my-progress" className="nav-link active">Progress Tracker</Link>
          <Link to="/services/grocery-list" className="nav-link">Grocery List</Link>
        </nav>
        <div className="navbar-right">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="feature-hero">
        <h1 className="feature-title neon-green">My Progress</h1>
        <p className="feature-sub">Track your nutrition journey and celebrate your achievements</p>
        <div style={{ margin: '2em 0 1.5em 0', display: 'flex', justifyContent: 'center', gap: 16 }}>
          <button
            className={`feature-btn-outline${view === 'daily' ? ' neon-glow' : ''}`}
            style={view === 'daily' ? { background: 'linear-gradient(90deg, #ffb347 0%, #ff5e62 100%)', color: '#181a20', border: 'none' } : {}}
            onClick={() => setView('daily')}
          >
            Daily View
          </button>
          <button
            className={`feature-btn-outline${view === 'weekly' ? ' neon-glow' : ''}`}
            style={view === 'weekly' ? { background: 'linear-gradient(90deg, #39ffb0 0%, #baff39 100%)', color: '#181a20', border: 'none' } : {}}
            onClick={() => setView('weekly')}
          >
            Weekly View
          </button>
        </div>
      </section>
      {view === 'daily' ? (
        <>
          <div className="progress-summary-row">
            <div className="progress-summary-card">
              <h3>Calories</h3>
              <div className="progress-bar-bg"><div className="progress-bar" style={{ width: `${Math.min(100, (totals.calories / dailyGoals.calories) * 100)}%`, background: 'linear-gradient(90deg, #ffb347 0%, #ff5e62 100%)' }}></div></div>
              <div className="progress-summary-label">{totals.calories} / {dailyGoals.calories}</div>
              <div style={{ color: '#b0b0b0', fontSize: '0.95em' }}>{dailyGoals.calories - totals.calories} cal remaining</div>
            </div>
            <div className="progress-summary-card">
              <h3>Protein</h3>
              <div className="progress-bar-bg"><div className="progress-bar" style={{ width: `${Math.min(100, (totals.protein / dailyGoals.protein) * 100)}%`, background: 'linear-gradient(90deg, #39ffb0 0%, #baff39 100%)' }}></div></div>
              <div className="progress-summary-label">{totals.protein} / {dailyGoals.protein}g</div>
            </div>
            <div className="progress-summary-card">
              <h3>Carbs</h3>
              <div className="progress-bar-bg"><div className="progress-bar" style={{ width: `${Math.min(100, (totals.carbs / dailyGoals.carbs) * 100)}%`, background: 'linear-gradient(90deg, #39ffb0 0%, #baff39 100%)' }}></div></div>
              <div className="progress-summary-label">{totals.carbs} / {dailyGoals.carbs}g</div>
            </div>
            <div className="progress-summary-card">
              <h3>Fat</h3>
              <div className="progress-bar-bg"><div className="progress-bar" style={{ width: `${Math.min(100, (totals.fat / dailyGoals.fat) * 100)}%`, background: 'linear-gradient(90deg, #ffb347 0%, #ff5e62 100%)' }}></div></div>
              <div className="progress-summary-label">{totals.fat} / {dailyGoals.fat}g</div>
            </div>
          </div>
          <div className="feature-card" style={{ maxWidth: 700, marginTop: 32 }}>
            <h2>Today's Meals</h2>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <select className="feature-input" style={{ width: 180 }} value={selectedFood} onChange={e => setSelectedFood(e.target.value)}>
                <option value="">Select food...</option>
                {foodOptions.map(f => <option key={f.name} value={f.name}>{f.name} ({f.calories} cal)</option>)}
              </select>
              <select className="feature-input" style={{ width: 120 }} value={selectedMeal} onChange={e => setSelectedMeal(e.target.value)}>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
              </select>
              <button className="feature-btn-gradient" style={{ padding: '0.5em 1.2em' }} onClick={addMeal} disabled={!selectedFood}>Add</button>
            </div>
            <table style={{ width: '100%', color: '#e0e0fa', marginBottom: 16 }}>
              <thead>
                <tr style={{ color: '#baff39', fontWeight: 600 }}>
                  <td>Meal</td><td>Food</td><td>Calories</td><td>Protein</td><td>Carbs</td><td>Fat</td><td></td>
                </tr>
              </thead>
              <tbody>
                {meals.map((meal, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #232946' }}>
                    <td>{meal.meal}</td>
                    <td>{meal.name}</td>
                    <td>{meal.calories}</td>
                    <td>{meal.protein}</td>
                    <td>{meal.carbs}</td>
                    <td>{meal.fat}</td>
                    <td><button className="feature-btn-outline danger" style={{ padding: '0.2em 0.7em', fontSize: 14 }} onClick={() => removeMeal(idx)}>✕</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <AchievementsGrid />
        </>
      ) : (
        <>
          <div className="progress-summary-row">
            <div className="progress-summary-card">
              <h3>Avg Calories/Day</h3>
              <div className="progress-bar-bg"><div className="progress-bar" style={{ width: `${Math.min(100, (weeklySummary.avgCalories / dailyGoals.calories) * 100)}%`, background: 'linear-gradient(90deg, #ffb347 0%, #ff5e62 100%)' }}></div></div>
              <div className="progress-summary-label">{weeklySummary.avgCalories}</div>
            </div>
            <div className="progress-summary-card">
              <h3>Days On Track</h3>
              <div className="progress-bar-bg"><div className="progress-bar" style={{ width: `${Math.min(100, (weeklySummary.daysOnTrack / 7) * 100)}%`, background: 'linear-gradient(90deg, #39ffb0 0%, #baff39 100%)' }}></div></div>
              <div className="progress-summary-label">{weeklySummary.daysOnTrack}/7</div>
            </div>
            <div className="progress-summary-card">
              <h3>Avg Water/Day</h3>
              <div className="progress-bar-bg"><div className="progress-bar" style={{ width: `${Math.min(100, (weeklySummary.avgWater / 2000) * 100)}%`, background: 'linear-gradient(90deg, #39ffb0 0%, #baff39 100%)' }}></div></div>
              <div className="progress-summary-label">{weeklySummary.avgWater}ml</div>
            </div>
            <div className="progress-summary-card">
              <h3>Day Streak</h3>
              <div className="progress-bar-bg"><div className="progress-bar" style={{ width: '100%', background: 'linear-gradient(90deg, #ffb347 0%, #ff5e62 100%)' }}></div></div>
              <div className="progress-summary-label">{weeklySummary.streak}</div>
            </div>
          </div>
          <AchievementsGrid />
        </>
      )}

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