import React, { useState } from 'react';
import './Blog.css';

const categories = [
  'All',
  'Technology',
  'Nutrition',
  'Hydration',
  'Meal Planning',
  'Education',
];

const articles = [
  {
    id: 1,
    category: 'Technology',
    title: 'The Science Behind AI-Powered Nutrition Planning',
    author: 'Dr. Sarah Mitchell',
    date: 'January 15, 2025',
    readTime: '8 min read',
    tags: ['AI', 'Nutrition', 'Research'],
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    featured: true,
    excerpt:
      'Discover how machine learning algorithms analyze millions of data points to create personalized meal plans that adapt to your unique nutritional needs and preferences.',
    link: '#',
  },
  {
    id: 2,
    category: 'Nutrition',
    title: '10 Superfoods That Transform Your Energy Levels',
    author: 'Maria Rodriguez',
    date: 'January 12, 2025',
    readTime: '6 min read',
    tags: ['Superfoods', 'Energy', 'Health'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    excerpt:
      'Learn about nutrient-dense foods that can naturally boost your energy, improve focus, and support long-term health goals with practical tips for daily integration.',
    link: '#',
  },
  {
    id: 3,
    category: 'Hydration',
    title: 'Hydration Hacks: Beyond the 8-Glass Rule',
    author: 'Dr. James Wilson',
    date: 'January 10, 2025',
    readTime: '5 min read',
    tags: ['Water', 'Health', 'Tips'],
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    excerpt:
      'The traditional advice might not work for everyone. Explore personalized hydration strategies based on your activity level, climate, and individual physiology.',
    link: '#',
  },
  {
    id: 4,
    category: 'Meal Planning',
    title: 'Meal Prep Made Easy: AI-Optimized Weekly Planning',
    author: 'Alex Chen',
    date: 'January 8, 2025',
    readTime: '7 min read',
    tags: ['Meal Prep', 'Planning', 'Efficiency'],
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    excerpt:
      'Transform your kitchen routine with intelligent meal prep strategies that save time, reduce waste, and ensure you always have healthy options ready.',
    link: '#',
  },
  {
    id: 5,
    category: 'Education',
    title: 'Understanding Macronutrients: Your Complete Guide',
    author: 'Dr. Sarah Mitchell',
    date: 'January 5, 2025',
    readTime: '10 min read',
    tags: ['Macronutrients', 'Nutrition', 'Guide'],
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
    excerpt:
      'Break down the complex world of proteins, carbohydrates, and fats with practical insights on how to balance them for optimal health and performance.',
    link: '#',
  },
  {
    id: 6,
    category: 'Technology',
    title: 'Smart Grocery Shopping: Technology Meets Nutrition',
    author: 'Maria Rodriguez',
    date: 'January 3, 2025',
    readTime: '6 min read',
    tags: ['Shopping', 'AI', 'Budget'],
    image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80',
    excerpt:
      'Revolutionize your shopping experience with AI-powered tools that help you make healthier choices, stay within budget, and reduce food waste.',
    link: '#',
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles =
    selectedCategory === 'All'
      ? articles.filter((a) => !a.featured)
      : articles.filter((a) => a.category === selectedCategory && !a.featured);
  const featured = articles.find((a) => a.featured);

  return (
    <div className="blog-page">
      {/* Hero Banner */}
      <section className="blog-hero">
        <h1>
          Health & Nutrition <span className="neon-text">Insights Blog</span>
        </h1>
        <p className="blog-hero-sub">
          Expert insights, cutting-edge research, and <span className="highlight">practical tips</span> to elevate your health journey
        </p>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="featured-article">
          <h2>Featured Article</h2>
          <div className="featured-card">
            <img src={featured.image} alt={featured.title} className="featured-img" />
            <div className="featured-content">
              <span className="article-category">{featured.category}</span>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <div className="article-meta">
                <span>👤 {featured.author}</span>
                <span>📅 {featured.date}</span>
                <span>⏱ {featured.readTime}</span>
              </div>
              <div className="article-tags">
                {featured.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <a href={featured.link} className="read-btn">Read Full Article →</a>
            </div>
          </div>
        </section>
      )}

      {/* Filter Bar */}
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

      {/* Article Grid */}
      <div className="blog-articles-grid">
        {filteredArticles.map((article) => (
          <div className="blog-article-card" key={article.id}>
            <img src={article.image} alt={article.title} className="article-img" />
            <span className="article-category">{article.category}</span>
            <h4>{article.title}</h4>
            <p>{article.excerpt}</p>
            <div className="article-meta">
              <span>👤 {article.author}</span>
              <span>📅 {article.date}</span>
              <span>⏱ {article.readTime}</span>
            </div>
            <div className="article-tags">
              {article.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a href={article.link} className="read-link">Read More →</a>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <h2>Stay Updated with Health Insights</h2>
        <p>Get the latest articles, research, and tips delivered directly to your inbox</p>
        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
} 