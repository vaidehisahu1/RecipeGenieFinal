import React from 'react';

export default function ContactForm() {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" rows={4} required />
      <button type="submit">Send Message</button>
    </form>
  );
} 