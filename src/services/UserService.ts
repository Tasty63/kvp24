import React, { Component } from 'react';
import api from '../http';
import { UserProfileResponse } from '../../app.api';
import AsyncStorage from '@react-native-async-storage/async-storage';

class UserService {
  async requestInfo() {
    return api.get<UserProfileResponse>('/v1/profile');
  }
}

export default new UserService();
