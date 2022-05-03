import React, { Component } from 'react';
import { MeteringDeviceInfo } from '../../app.api';
import api from '../http';

class MeteringDevicesService {
  async requestInfo() {
    return api.get<MeteringDeviceInfo[]>('/v1/metering_device');
  }
}

export default new MeteringDevicesService();
