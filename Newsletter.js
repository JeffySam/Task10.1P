import React, { useState } from 'react';
import axios from 'axios';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }

    // Axios call to backend
    axios.post('http://localhost:5002/subscribe', { email })
      .then(response => setMessage('Subscription successful! Check your email.'))
      .catch(error => {
        console.error('Subscription error:', error);
        setMessage('Subscription failed. Please try again.');
      });
  };

  return (
    <div className="newsletter">
      <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Newsletter;
