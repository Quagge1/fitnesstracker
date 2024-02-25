import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import WorkoutList from './workoutList';
import CreateWorkout from './createWorkout';
import DeleteWorkout from './deleteWorkout';
import UpdateWorkout from './updateWorkout';
import HomePage from './homePage';
import RegisterPage from './registerPage'; 

function App() {
  const [workouts, setWorkouts] = useState([]);

  const handleWorkoutCreated = (newWorkout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
  };

  const handleWorkoutUpdate = (index, updatedWorkout) => {
    setWorkouts((prevWorkouts) => {
      const newWorkouts = [...prevWorkouts];
      newWorkouts[index] = updatedWorkout;
      return newWorkouts;
    });
  };

  const handleWorkoutDelete = (index) => {
    setWorkouts((prevWorkouts) => {
      const newWorkouts = [...prevWorkouts];
      newWorkouts.splice(index, 1);
      return newWorkouts;
    });
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/workouts"
            element={<WorkoutList workouts={workouts} onDelete={handleWorkoutDelete} />}
          />
          <Route
            path="/create"
            element={<CreateWorkout onWorkoutCreated={handleWorkoutCreated} />}
          />
          <Route
            path="/delete/:index"
            element={<DeleteWorkout workouts={workouts} onDelete={handleWorkoutDelete} />}
          />
          <Route
            path="/update/:index"
            element={<UpdateWorkout workouts={workouts} onUpdate={handleWorkoutUpdate} />}
          />
          <Route // Remove this Route
            path="/register"
            element={<RegisterPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
