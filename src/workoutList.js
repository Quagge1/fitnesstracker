import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutList = ({ workouts, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="container">
      <h2>Workout List</h2>
      <ul>
        {workouts.map((workout, index) => (
          <div key={index} className="workout-container">
            <li>
              {workout.name} - Time: {workout.time} minutes, Calories: {workout.calories}
            </li>
            <div>
              <Link to={`/update/${index}`}>Update</Link>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;



