import React, { Component } from 'react';
import api from '../http';
import { UserProfileResponse } from '../../app.api';

class UserService {
  async requestInfo() {
    return api.get<UserProfileResponse>('/v1/profile');
  }

  async requestEula() {
    return api.post('/v1/profile/eula');
  }
}

export default new UserService();
