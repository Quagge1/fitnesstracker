import React, { useState } from 'react';

const UpdateGoal = ({ index, goal, onUpdate }) => {
  const [name, setName] = useState(goal.name);
  const [description, setDescription] = useState(goal.description);
  const [target, setTarget] = useState(goal.target);
  const [currentLevel, setCurrentLevel] = useState(goal.currentLevel);

  //update goal event handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedGoal = {
      goal, 
      name,
      description,
      target,
      currentLevel,
    };
    
    onUpdate(index, updatedGoal);
  };
  //rendering update goal
  return (
    <div className="container fade-in">
      <h2>Update Goal</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Target:</label>
        <input type="text" value={target} onChange={(e) => setTarget(e.target.value)} />

        <label>Current Level:</label>
        <input type="text" value={currentLevel} onChange={(e) => setCurrentLevel(e.target.value)} />

        <button type="submit">Update Goal</button>
      </form>
    </div>
  );
};

export default UpdateGoal;
