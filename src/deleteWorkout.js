import React from 'react';

const DeleteWorkout = ({ match, workouts, onDelete }) => {
  const workoutIndex = match.params.index;
  
  //event handler
  const handleDelete = () => {
    onDelete(workoutIndex);
  };
//rendering of event handler and deleteing workout
  return (
    <div className="container">
      <h2>Delete Workout</h2>
      <p>Are you sure you want to delete this workout?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteWorkout;


