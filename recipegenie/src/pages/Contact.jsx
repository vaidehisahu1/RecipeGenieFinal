import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="card" style={{ margin: '2em auto', maxWidth: 600 }}>
      <h1 style={{ color: '#ffb347', textShadow: '0 0 12px #ffb34788' }}>Contact Us</h1>
      <ContactForm />
    </div>
  );
} 