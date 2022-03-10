import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseURL = 'https://lk.kvp24.ru/api';

const api = axios.create({
  baseURL,
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
