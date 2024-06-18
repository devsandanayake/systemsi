import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://124.43.179.18:3001'
});

export default axiosInstance;
