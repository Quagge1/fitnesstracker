import React, { useState } from 'react';

const AddGoals = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  //event handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !target || !currentLevel) {
      //failure message alert
      alert('Please fill in all fields');
      return;
    }
    const newGoal = {
      name,
      description,
      target,
      currentLevel,
      isCompleted
    };
    onAdd(newGoal); 
    // Reset form fields
    setName('');
    setDescription('');
    setTarget('');
    setCurrentLevel('');
    setIsCompleted(false);
  };

  //page rendering with event handlers built in
  return (
    <div className="container">
      <h2>Add Goal</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Target:</label>
        <input type="text" value={target} onChange={(e) => setTarget(e.target.value)} />

        <label>Current Level:</label>
        <input type="text" value={currentLevel} onChange={(e) => setCurrentLevel(e.target.value)} />

        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default AddGoals;
