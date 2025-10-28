// lib/api.ts
import axios from 'axios';

// Створюємо інстанс axios
export const nextServer = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true, // дозволяє axios працювати з cookie
});
