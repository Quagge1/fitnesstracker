import React, { useState } from 'react';
import Goal from './goal'; 
import './App.css'; //import so that css animations work

const GoalsList = ({ goals, onUpdate }) => {
  const [editingGoalIndex, setEditingGoalIndex] = useState(null);
  const [editedGoal, setEditedGoal] = useState({});
  
  //event Handlers
  const handleEditClick = (index) => {
    setEditingGoalIndex(index);
    setEditedGoal({ ...goals[index] });
  };

  const handleCancelEdit = () => {
    setEditingGoalIndex(null);
    setEditedGoal({});
  };

  const handleSaveEdit = (index) => {
    onUpdate(index, editedGoal);
    setEditingGoalIndex(null);
    setEditedGoal({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedGoal({ ...editedGoal, [name]: value });
  };

  const getStatus = (goal) => {
    return goal.currentLevel >= goal.target ? 'Complete' : 'Incomplete';
  };

  //return stage for page rendering with event handlers
  return (
    <div className="goals-list fade-in">
      <h2>Goals List</h2>
      {goals.map((goal, index) => (
        //integrating css animations
        <div key={index} className={`fade-in ${editingGoalIndex === index ? 'fade-out' : ''}`}>
          {editingGoalIndex === index ? (
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editedGoal.name}
                onChange={handleInputChange}
              />
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={editedGoal.description}
                onChange={handleInputChange}
              />
              <label>Target:</label>
              <input
                type="text"
                name="target"
                value={editedGoal.target}
                onChange={handleInputChange}
              />
              <label>Current Level:</label>
              <input
                type="text"
                name="currentLevel"
                value={editedGoal.currentLevel}
                onChange={handleInputChange}
              />
              <button onClick={() => handleSaveEdit(index)}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <div>
              <Goal
                name={goal.name}
                description={goal.description}
                target={goal.target}
                currentLevel={goal.currentLevel}
                isCompleted={goal.isCompleted}
              />
              <button onClick={() => handleEditClick(index)}>Edit</button>
            </div>
          )}
          <div>Status: {getStatus(goal)}</div> 
        </div> //status display for goal in above line
      ))}
    </div>
  );
};

export default GoalsList;
