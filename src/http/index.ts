import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = 'https://lk.kvp24.ru/api';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  if (!config.headers) {
    return;
  }
  const token = await AsyncStorage.getItem('accessToken');

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

// api.interceptors.response.use(
//   (config) => config,
//   (error) => {
//     if (error.response.status == 401) {
//       // post refreshToken
//       console.log('kek');
//     }
//   }
// );

export default api;
