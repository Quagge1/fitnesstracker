import React from 'react';

//goal structure
const Goal = ({ name, description, target, currentLevel, isCompleted }) => {
  return (
    <div className="goal fade-in">
      <h3>{name}</h3>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Target:</strong> {target}</p>
      <p><strong>Current Level:</strong> {currentLevel}</p>
    </div>
  );
};

export default Goal;
