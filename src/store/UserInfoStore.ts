import { UserService } from './../services/UserService';
import { makeAutoObservable } from 'mobx';
import { Text, View } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

class UserInfoStore {
  user = {};

  constructor() {
    makeAutoObservable(this);
  }

  async getInfo() {
    try {
      const info = await UserService.requestInfo();
      console.log(info.data);
    } catch (error) {
      console.log(error);

      // if (error instanceof Error) {
      //   console.log(error.name);
      // }
    }
  }
}

export default new UserInfoStore();
