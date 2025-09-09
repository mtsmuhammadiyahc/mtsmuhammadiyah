// src/api/adminApi.js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api/admin';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  timeout: 15000,
});

// attach token automatically if exists
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (err) => Promise.reject(err));

export default instance;
