import React from 'react';
import LoginForm from './loginForm'; // Assuming you have a LoginForm component
import { Link } from 'react-router-dom';

//home page structure
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Fitness Tracker</h1>
      <div>
        <h2>Login</h2>
        <LoginForm />
      </div>
      <div>
        <h2>Don't have an account?</h2>
        <button>
          <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register here</Link>
        </button> {}
      </div>
    </div>
  );
}

export default HomePage;

