import axios from 'axios';

const api = axios.create({
  baseURL: '/api',// proxy configurado en astro.config.mjs
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});
export default api;
