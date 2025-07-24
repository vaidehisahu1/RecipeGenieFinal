import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup submitted!');
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };
  return (
    <div className="feature-page-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form className="feature-card" style={{ minWidth: 340, maxWidth: 400 }} onSubmit={handleSubmit}>
        <h2 style={{ color: 'var(--color-accent2)', textAlign: 'center', marginBottom: 24 }}>Sign Up</h2>
        <label style={{ fontWeight: 500, color: 'var(--color-accent2)' }}>Name</label>
        <input className="feature-input" type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Enter your name" />
        <label style={{ fontWeight: 500, color: 'var(--color-accent2)' }}>Email</label>
        <input className="feature-input" type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Enter your email" />
        <label style={{ fontWeight: 500, color: 'var(--color-accent2)' }}>Password</label>
        <input className="feature-input" type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Create a password" />
        <button className="feature-btn-gradient" type="submit" style={{ width: '100%', marginTop: 18 }}>Sign Up</button>
        <div style={{ textAlign: 'center', marginTop: 18 }}>
          <span style={{ color: 'var(--color-text)' }}>Already have an account? </span>
          <Link to="/login" style={{ color: 'var(--color-accent2)', fontWeight: 600 }}>Login</Link>
        </div>
      </form>
    </div>
  );
} 