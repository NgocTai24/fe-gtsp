
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3001', // Đây là URL của JSON Server
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;