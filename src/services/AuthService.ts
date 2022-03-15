import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthResponse } from '../../app.api';
import api from '../http';

export default class AuthService {
  static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>(`/oauth/token?grant_type=password&username=${username}&password=${password}`);
  }

  static async logout() {
    return;
  }
}
