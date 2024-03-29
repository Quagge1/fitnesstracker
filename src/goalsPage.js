import React from 'react';
import GoalsList from './goalsList';

//goals page structure
const GoalsPage = ({ goals }) => {
  return (
    <div className='fade-in'>
      <h2>Goals</h2>
      <GoalsList goals={goals} />
    </div>
  );
};

export default GoalsPage;
