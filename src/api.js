import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; 

//functions for workouts through api
export const getWorkouts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/workouts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching workouts:', error);
    throw error;
  }
};

export const createWorkout = async (workout) => {
  try {
    console.log('Creating workout:', workout);
    const response = await axios.post(`${API_BASE_URL}/workouts`, workout); 
    console.log('Workout created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating workout:', error);
    throw error;
  }
};

export const readWorkout = async (workoutId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/workouts/${workoutId}`);
    return response.data;
  } catch (error) {
    console.error('Error reading workout:', error);
    throw error;
  }
};

export const updateWorkout = async (workoutId, updatedWorkout) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/workouts/${workoutId}`, updatedWorkout);
    return response.data;
  } catch (error) {
    console.error('Error updating workout:', error);
    throw error;
  }
};

export const deleteWorkout = async (workoutId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/workouts/${workoutId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting workout:', error);
    throw error;
  }
};
