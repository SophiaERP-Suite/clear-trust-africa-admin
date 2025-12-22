// src/api/adminApi.ts
import axios from 'axios';

const API_BASE_URL = 'https://localhost:5001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Optional: attach token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token'); // replace with your auth logic
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;
