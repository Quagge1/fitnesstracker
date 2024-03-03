import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import WorkoutList from './workoutList';
import CreateWorkout from './createWorkout';
import DeleteWorkout from './deleteWorkout';
import UpdateWorkout from './updateWorkout';
import HomePage from './homePage';
import RegisterPage from './registerPage'; 
import AddGoals from './addGoals';
import GoalsList from './goalsList';
import UpdateGoal from './updateGoal';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState([]); 
  //event handlers
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

  const handleAddGoal = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleGoalUpdate = (index, updatedGoal) => {
    setGoals((prevGoals) => {
      const newGoals = [...prevGoals];
      newGoals[index] = updatedGoal;
      return newGoals;
    });
  };

  //page rendering routes with all event handlers 
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
          <Route
            path="/goals"
            element={<GoalsPage goals={goals} onUpdate={handleGoalUpdate} />} 
          />
          <Route
            path="/add-goals"
            element={<AddGoals onAdd={handleAddGoal} />}
          />
          <Route
            path="/update-goal/:index"
            element={<UpdateGoal goals={goals} onUpdate={handleGoalUpdate} />}
          />
          <Route 
            path="/register"
            element={<RegisterPage />}
          />
        </Routes>
      </div>
    </Router>
  );
  
  // Define GoalsPage component so that it renders as intended 
  function GoalsPage({ goals, onUpdate }) {
    return (
      <div>
        <AddGoals onAdd={handleAddGoal} />
        <GoalsList goals={goals} onUpdate={onUpdate} />
      </div>
    );
  }
}

export default App;
