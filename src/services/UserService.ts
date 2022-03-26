import { Text, View } from 'react-native';
import React, { Component } from 'react';
import api from '../http';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthResponse } from '../../app.api';
import axios from 'axios';

export class UserService {
  static async requestInfo() {
    return await api.get('/v1/profile/banks');
  }
}

export default UserService;
