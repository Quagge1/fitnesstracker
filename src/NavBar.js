import React from 'react';
import { Link } from 'react-router-dom';

//nave bar structure and links to corresponding pages
const NavBar = () => {
  return (
    <nav style={{ width: '100%', backgroundColor: '#333', padding: '10px 20px', marginBottom: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }} to="/">Fitness Tracker</Link>
        <Link style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }} to="/workouts">Workouts List</Link>
        <Link style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }} to="/create">Create Workout</Link>
        <Link style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }} to="/goals">Goals</Link>
      </div>
    </nav>
  );
};

export default NavBar;

