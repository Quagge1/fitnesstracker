import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateWorkout = ({ workouts, onUpdate }) => {
  const { index } = useParams();
  const workoutIndex = parseInt(index, 10);
  const workout = workouts[workoutIndex];

  const [newWorkoutName, setNewWorkoutName] = useState(workout ? workout.name : '');
  const [newWorkoutTime, setNewWorkoutTime] = useState(workout ? workout.time : '');
  const [newWorkoutCalories, setNewWorkoutCalories] = useState(workout ? workout.calories : '');

  //event handler
  const handleUpdate = () => {
    if (workout) {
      const updatedWorkout = {
        name: newWorkoutName,
        time: newWorkoutTime,
        calories: newWorkoutCalories,
      };

      onUpdate(workoutIndex, updatedWorkout);
    }
  };
  //rendering update workout
  return (
    <div className="container">
      <h2>Update Workout</h2>
      <label>Workout Name:</label>
      <input
        type="text"
        value={newWorkoutName}
        onChange={(e) => setNewWorkoutName(e.target.value)}
      />

      <label>Workout Time (minutes):</label>
      <input
        type="number"
        value={newWorkoutTime}
        onChange={(e) => setNewWorkoutTime(e.target.value)}
      />

      <label>Workout Calories:</label>
      <input
        type="number"
        value={newWorkoutCalories}
        onChange={(e) => setNewWorkoutCalories(e.target.value)}
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateWorkout;
