import axios from 'axios';

const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// auth

export default Api;
