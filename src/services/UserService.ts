import React, { Component } from 'react';
import api from '../http';
import { UserProfileResponse } from '../../app.api';

class UserService {
  async requestInfo() {
    return await api.get<UserProfileResponse>('/v1/profile');
  }
}

export default new UserService();
