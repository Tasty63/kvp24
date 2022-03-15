import React from 'react';
import { makeAutoObservable, makeObservable, observable, action, flow } from 'mobx';
import AuthService from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStore {
  isAuth = false;

  constructor() {
    makeObservable(this, {
      isAuth: observable,
      login: action.bound,
      logout: action.bound,
      setAuth: action.bound,
    });
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
      AsyncStorage.removeItem('accessToken');
      this.setAuth(false);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
}

const authStore = new AuthStore();

export const authStoreContext = React.createContext(authStore);
export const useAuthStore = () => React.useContext(authStoreContext);
