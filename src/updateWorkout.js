import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; // importing framer-motion for animations

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

  // defining the animations
  const containerVariants = {
    hidden: { opacity: 0, y: -50 }, 
    visible: { opacity: 1, y: 0 }, 
  };

  // Rendering update workout with animations
  return (
    <motion.div className="container" initial="hidden" animate="visible" variants={containerVariants}>
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
    </motion.div>
  );
};

export default UpdateWorkout;
