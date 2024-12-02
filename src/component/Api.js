import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// Retrieve token from localStorage
const token = localStorage.getItem('token');

// Create an Axios instance with a base URL and Authorization header
const api = axios.create({
  baseURL: `${process.env.URl}/api/admin`,  // Change this to your actual API base URL
  headers: {
    Authorization: `Bearer ${token}`, // Add token to headers
  },
});

// Export the Axios instance to use in other parts of your app
export default api;
