import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate(); 

  //event handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      setLoginMessage('You are now logged in');

      
      navigate('/workouts'); // Navigates user to workout list page on successful login

      console.log('User logged in successfully');
    } catch (error) {
      // login failure message on page and in dev tools
      setLoginMessage('Login failed. Please check your email and password.');
      console.error('Login failed:', error.message);
    }
  };
  //rendering of login form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      {loginMessage && <p>{loginMessage}</p>}
    </div>
  );
}

export default LoginForm;
