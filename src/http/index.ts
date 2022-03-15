import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://lk.kvp24.ru/api';
const CLIENT_ID = 'k24-test';
const CLIENT_SECRET = '050e1e2c-cdb4-47ca-b698-bf8fbf9a6ae1';

const api = axios.create({
  baseURL: BASE_URL,
  auth: {
    username: CLIENT_ID,
    password: CLIENT_SECRET,
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  if (!config.headers) {
    return;
  }

  config.headers.Authorization = `Bearer ${AsyncStorage.getItem('accessToken')}`;
  return config;
});

export default api;
