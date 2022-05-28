import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosResponse } from 'axios';
import { AuthResponse } from '../../app.api';
import api, { BASE_URL } from '../http';

const CLIENT_ID = 'k24-test';
const CLIENT_SECRET = '050e1e2c-cdb4-47ca-b698-bf8fbf9a6ae1';

class AuthService {
  async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>(
      `/oauth/token?grant_type=password&username=${username}&password=${password}`,
      {},
      {
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
      }
    );
  }

  async logout() {
    return api.get('/v1/profile/logout');
  }

  async check() {
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    return axios.post<AuthResponse>(
      `${BASE_URL}/oauth/token?grant_type=refresh_token&refresh_token=${refreshToken}`,
      {},
      {
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
      }
    );
  }
}

export default new AuthService();
