import React, { useState } from 'react';
import './FeaturePages.css';

const foodOptions = [
  { name: 'Oatmeal with berries', calories: 320, protein: 10, carbs: 55, fat: 5 },
  { name: 'Grilled chicken salad', calories: 450, protein: 35, carbs: 30, fat: 12 },
  { name: 'Salmon with quinoa', calories: 580, protein: 40, carbs: 60, fat: 18 },
  { name: 'Egg white omelette', calories: 200, protein: 18, carbs: 3, fat: 7 },
  { name: 'Greek yogurt parfait', calories: 180, protein: 12, carbs: 22, fat: 3 },
  { name: 'Veggie stir fry', calories: 350, protein: 8, carbs: 60, fat: 8 },
  { name: 'Protein shake', calories: 250, protein: 25, carbs: 10, fat: 4 },
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
    </div>
  );
} 