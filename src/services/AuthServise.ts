import { AxiosResponse } from 'axios';
import { AuthResponse } from '../../app.api';
import api from '../http';

export default class AuthService {
  static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/oauth/token', { username, password });
  }

  static async logout() {
    return api.post('/oauth/token');
  }
}
