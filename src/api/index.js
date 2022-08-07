import axios from 'axios';

const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

const createJSON = (data) => Api.post('/generate_sql', data);

export default {
  createJSON
};
