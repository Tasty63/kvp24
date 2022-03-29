import { Text, View } from 'react-native';
import React, { Component } from 'react';
import api from '../http';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthResponse } from '../../app.api';
import axios from 'axios';

class UserService {
  async requestInfo() {
    return await api.get('/v1/profile');
  }
}

export default new UserService();
