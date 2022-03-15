import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Store {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(state: boolean) {
    this.isAuth = state;
  }

  async login(username: string, password: string) {
    try {
      const response = await AuthService.login(username, password);
      AsyncStorage.setItem('accessToken', response.data.access_token);
      this.setAuth(true);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      AsyncStorage.removeItem('accessToken');
      this.setAuth(false);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
}

export default new Store();
