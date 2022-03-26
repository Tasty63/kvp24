import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthResponse } from '../../app.api';
import api from '../http';

const CLIENT_ID = 'k24-test';
const CLIENT_SECRET = '050e1e2c-cdb4-47ca-b698-bf8fbf9a6ae1';

export default class AuthService {
  static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
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

  static async logout() {
    return;
  }
}
