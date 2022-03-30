import axios, { AxiosRequestConfigOptional, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../services/AuthService';

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

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const ortiginalRequest: AxiosRequestConfigOptional = error.config;
    if (error.response.status == 401 && ortiginalRequest && !ortiginalRequest._isRetry) {
      ortiginalRequest._isRetry = true;
      try {
        const response = await AuthService.check();
        await AsyncStorage.setItem('accessToken', response.data.access_token);
        await AsyncStorage.setItem('refreshToken', response.data.refresh_token);
        return api.request(ortiginalRequest);
      } catch (error) {
        console.log('Пользователь не авторизован');
      }
    }
    throw error;
  }
);

export default api;
