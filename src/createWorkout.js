import React, { useState } from 'react';

const CreateWorkout = ({ onWorkoutCreated }) => {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutTime, setWorkoutTime] = useState('');
  const [workoutCalories, setWorkoutCalories] = useState('');

  const handleCreate = () => {
    const newWorkout = {
      name: workoutName,
      time: workoutTime,
      calories: workoutCalories,
    };

    onWorkoutCreated(newWorkout);

    // Reset form fields
    setWorkoutName('');
    setWorkoutTime('');
    setWorkoutCalories('');
  };

  return (
    <div className="container">
      <h2>Create Workout</h2>
      <label>Workout Name:</label>
      <input type="text" value={workoutName} onChange={(e) => setWorkoutName(e.target.value)} />

      <label>Workout Time (minutes):</label>
      <input type="number" value={workoutTime} onChange={(e) => setWorkoutTime(e.target.value)} />

      <label>Workout Calories:</label>
      <input type="number" value={workoutCalories} onChange={(e) => setWorkoutCalories(e.target.value)} />

      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateWorkout;