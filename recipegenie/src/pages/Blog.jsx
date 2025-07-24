import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import './Home.css';

const categories = [
  'All',
  'Technology',
  'Nutrition',
  'Hydration',
  'Meal Planning',
  'Education',
];

const blogData = {
  Technology: [
    {
      title: 'AI That Understands Your Plate',
      excerpt: 'RecipeGenie’s AI analyzes your preferences, dietary needs, and goals to suggest meals that are not only tasty but smart. Whether you\'re vegan, gluten-free, or tracking macros, the algorithm adapts and evolves with your input, making each suggestion more accurate over time.',
      author: 'Alex Chen',
      date: 'Feb 2, 2025',
      readTime: '5 min read',
      tags: ['AI', 'Personalization'],
      image: 'https://media.gettyimages.com/id/2096491543/video/modern-greenhouses-of-the-future-monitor-plant-growth-and-grow-pure-unmodified-natural.jpg?s=640x640&k=20&c=QBZHGaCHKEEwU70HIFYZPm66T_bZBgAiK5Gv7lIB4Y8=',
    },
    {
      title: 'Smart Grocery Lists with AI',
      excerpt: 'Gone are the days of manual grocery planning. RecipeGenie generates shopping lists directly from your selected recipes or weekly plan. It tracks what’s already in your pantry and even syncs with your dietary goals for a smart, stress-free shopping experience.',
      author: 'Maria Rodriguez',
      date: 'Feb 10, 2025',
      readTime: '4 min read',
      tags: ['AI', 'Grocery'],
      image: 'https://media.istockphoto.com/id/1277731109/photo/nutrition-science-concept-data-analytics-of-foods.jpg?s=612x612&w=0&k=20&c=YJqYzo4HeDxIq8LZ8nuRqhcwUtQ0txO4S1vt7MB20oA=',
    },
    {
      title: 'Tech Meets Taste',
      excerpt: 'RecipeGenie bridges nutrition science with tech, combining data, flavor, and health insights. It learns what you love and what you need, ensuring your meals are both satisfying and aligned with your wellness journey—whether you want to gain muscle or shed weight.',
      author: 'Alex Chen',
      date: 'Feb 18, 2025',
      readTime: '6 min read',
      tags: ['Tech', 'Taste'],
      image: 'https://media.istockphoto.com/id/169999232/photo/biotechnology.jpg?s=612x612&w=0&k=20&c=UuyWeb0PXiMK5CNwwQpEfesS19DxzDsuqLDVm-QTxeM=',
    },
  ],
  Nutrition: [
    {
      title: 'Fueling Goals with Food',
      excerpt: 'Every meal in RecipeGenie is backed by nutritional data. Calorie counts, protein levels, carbs, and fats—each element is broken down to help you stay on track, whether your goal is weight loss, weight gain, or maintaining a balanced lifestyle.',
      author: 'Dr. Sarah Mitchell',
      date: 'Mar 1, 2025',
      readTime: '5 min read',
      tags: ['Nutrition', 'Goals'],
      image: 'https://www.shutterstock.com/image-photo/balanced-diet-food-background-organic-260nw-734256100.jpg',
    },
    {
      title: 'Superfoods Made Simple',
      excerpt: 'RecipeGenie integrates nutrient-rich foods like oats, berries, and spinach into daily meal plans. You’ll find easy recipes that include these superfoods, making it effortless to boost immunity, energy, and overall wellness without overthinking your diet.',
      author: 'Maria Rodriguez',
      date: 'Mar 8, 2025',
      readTime: '4 min read',
      tags: ['Superfoods', 'Wellness'],
      image: 'https://media.istockphoto.com/id/2186460120/video/food-products-representing-the-mediterranean-diet.jpg?b=1&s=640x640&k=20&c=EYVsSBEW_uX2Zdw8QNGtNKPzF1bv-D9G9Uf9o4mCRqI=',
    },
    {
      title: 'Understanding Portion Power',
      excerpt: 'Too much of a good thing can still be too much. That’s why RecipeGenie helps with portion control through accurate nutritional breakdowns and AI-adjusted serving sizes, helping you maintain consistency and avoid unnecessary overindulgence.',
      author: 'Dr. Sarah Mitchell',
      date: 'Mar 15, 2025',
      readTime: '6 min read',
      tags: ['Portion', 'Control'],
      image: 'https://c4.wallpaperflare.com/wallpaper/723/396/1003/food-diet-healthy-fresh-wallpaper-preview.jpg',
    },
  ],
  Hydration: [
    {
      title: 'Hydration Beyond Water',
      excerpt: 'RecipeGenie doesn’t just track glasses of water—it suggests hydrating foods like fruits and soups, which contribute to your hydration goals. It considers weather, activity level, and body weight to offer tailored hydration insights every day.',
      author: 'Dr. James Wilson',
      date: 'Apr 1, 2025',
      readTime: '5 min read',
      tags: ['Hydration', 'Tips'],
      image: 'https://c0.wallpaperflare.com/preview/294/36/850/aqua-beverage-clear-close-up.jpg',
    },
    {
      title: 'Daily Water Goals, Made Easy',
      excerpt: 'With built-in hydration reminders and progress visuals, RecipeGenie motivates you to meet your daily water target. Whether you\'re working out or working from home, it adjusts recommendations to match your lifestyle and keeps you refreshed and alert.',
      author: 'Dr. James Wilson',
      date: 'Apr 8, 2025',
      readTime: '4 min read',
      tags: ['Hydration', 'Goals'],
      image: 'https://img.freepik.com/premium-photo/proper-nutrition-food-set-healthy-lifestyle-healthy-eating-fruits-vegetables-pure-water-organic-diet-calorie-food-beautiful-body_771426-538.jpg',
    },
    {
      title: 'Track and Transform',
      excerpt: 'Proper hydration affects digestion, mood, and energy. RecipeGenie logs your daily intake, encourages timely sips, and helps identify when you\'re falling short. Over time, you’ll build better hydration habits without even thinking about it.',
      author: 'Dr. James Wilson',
      date: 'Apr 15, 2025',
      readTime: '6 min read',
      tags: ['Hydration', 'Habits'],
      image: 'https://c0.wallpaperflare.com/preview/924/452/46/antioxidant-beach-berry-beverage.jpg',
    },
  ],
  'Meal Planning': [
    {
      title: 'Your Week, Your Way',
      excerpt: 'Plan your meals in just a few taps. RecipeGenie creates daily and weekly meal plans based on your dietary goals and available ingredients. Whether it’s a busy week or a slow weekend, your meals stay organized and on track.',
      author: 'Alex Cheng',
      date: 'May 1, 2025',
      readTime: '5 min reading',
      tags: ['Meal Planning', 'Organization'],
      image: 'https://media.istockphoto.com/id/876656394/photo/healthy-food-concept-fresh-vegetables-fruits-meat-and-fish-on-wooden-table-healthy-eating-and.jpg?s=612x612&w=0&k=20&c=N_LMUgJcADQrhZUnHSJmF1TueaZ2_5scc6ArQxZsxho=',
    },
    {
      title: 'Meal Prep Made Smart',
      excerpt: 'Forget guesswork—RecipeGenie helps you prep smarter. From choosing nutrient-dense meals to tracking prep time and batch cooking, the app streamlines your week with AI-curated, goal-specific meals that save both time and energy.',
      author: 'Maria Rodriguez',
      date: 'May 8, 2025',
      readTime: '4 min read',
      tags: ['Meal Prep', 'Batch Cooking'],
      image: 'https://media.istockphoto.com/id/1248786671/photo/weekly-meal-plan-meal-prep-concept-raw-food-ingredients-in-boxes.jpg?s=612x612&w=0&k=20&c=juA56QAIa4MqbQ5N2gNdx3LIhSjb1slb6P0I7dGJ4gY=',
    },
    {
      title: 'Zero Waste, Full Plates',
      excerpt: 'RecipeGenie’s meal planner uses ingredients you already have, minimizing waste and ensuring freshness. It helps reduce overbuying, encourages full pantry usage, and delivers recipes that maximize flavor and minimize leftovers.',
      author: 'Alex Chen',
      date: 'May 15, 2025',
      readTime: '6 min read',
      tags: ['Zero Waste', 'Freshness'],
      image: 'https://img.freepik.com/free-photo/flat-lay-charts-organic-food-lunch-boxes_23-2148515964.jpg?semt=ais_hybrid&w=740',
    },
  ],
  Education: [
    {
      title: 'Demystifying Macronutrients',
      excerpt: 'What are macros and why do they matter? RecipeGenie helps users understand the balance of carbs, protein, and fats in every meal. Knowing your macronutrient needs is the first step toward creating sustainable eating habits—and hitting your health goals.',
      author: 'Dr. Sarah Mitchell',
      date: 'Jun 1, 2025',
      readTime: '5 min read',
      tags: ['Macros', 'Education'],
      image: 'https://media.gettyimages.com/id/2155945415/video/people-are-enjoying-a-cooking-class-to-learn-how-to-make-homemade-pasta.jpg?s=640x640&k=20&c=KC8VpqePd795usZJQodnxRfKrgzOs6VUrbwd-Q0LVbc=',
    },
    {
      title: 'Reading Food Labels 101',
      excerpt: 'Navigating the grocery store can be overwhelming. RecipeGenie teaches users how to read nutrition labels effectively. You’ll learn to spot hidden sugars, understand ingredient lists, and make better food choices confidently.',
      author: 'Maria Rodriguez',
      date: 'Jun 8, 2025',
      readTime: '4 min read',
      tags: ['Labels', 'Shopping'],
      image: 'https://media.istockphoto.com/id/1554253366/photo/take-a-breather-from-learning-high-angle-shot-showcasing-lunch-box-with-vegan-sandwiches.jpg?s=612x612&w=0&k=20&c=Jns-_HhbAlpBvohoLwDWS28-TfdcEzJbsDigLmvryqs=',
    },
    {
      title: 'Diet Myths, Debunked',
      excerpt: 'From “carbs make you fat” to “detox drinks are essential,” RecipeGenie clears the confusion with science-backed education. With clear explanations and expert insights, users are empowered to follow evidence-based nutrition instead of fads.',
      author: 'Dr. Sarah Mitchell',
      date: 'Jun 15, 2025',
      readTime: '6 min read',
      tags: ['Myths', 'Science'],
      image: 'https://media.istockphoto.com/id/1135730224/photo/cooking-class-food-hobby-healthy-eating-lifestyle.jpg?s=612x612&w=0&k=20&c=0c1S93plucxVyi8w3Ok8dTLpHUKj1tYiAxFvdHLjozw=',
    },
  ],
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');


  const allBlogs = Object.values(blogData).flat();
  const blogsToShow = selectedCategory === 'All' ? allBlogs : blogData[selectedCategory];

  return (
    <div className="home-bg">
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo-icon">&#128717;</span>
          <span className="logo-text">RecipeGenie</span>
        </div>
        <nav className="navbar-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/blog" className="nav-link active">Blog</Link>
        </nav>
        <div className="navbar-right">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </header>
      <div className="blog-page">
  
        <section className="blog-hero">
          <h1 style={{ fontSize: '2.5em', color: 'var(--color-accent2)', marginBottom: 8 }}>🍽️ Smart Eating Made Simple</h1>
          <p className="blog-hero-sub" style={{ fontSize: '1.2em', color: 'var(--color-text)' }}>
            AI-driven food advice, smart tips, and recipe science—all in one place. Discover how technology meets taste with RecipeGenie.
          </p>
        </section>
     
        <div className="blog-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? 'active' : ''}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="blog-articles-grid">
          {blogsToShow.map((blog, idx) => (
            <div className="blog-article-card" key={blog.title + idx}>
              <img src={blog.image} alt={blog.title} className="article-img" />
              <span className="article-category">{selectedCategory === 'All' ? Object.keys(blogData).find(cat => blogData[cat].includes(blog)) : selectedCategory}</span>
              <h4>{blog.title}</h4>
              <p>{blog.excerpt}</p>
              <div className="article-meta">
                <span>👤 {blog.author}</span>
                <span>📅 {blog.date}</span>
                <span>⏱ {blog.readTime}</span>
              </div>
              <div className="article-tags">
                {blog.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
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