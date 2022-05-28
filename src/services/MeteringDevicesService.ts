import { MeteringDeviceValues, Reading } from './../../app.api';
import { MeteringDeviceInfo } from '../../app.api';
import api from '../http';

class MeteringDevicesService {
  async requestInfo() {
    return api.get<MeteringDeviceInfo[]>('/v1/metering_device');
  }

  async sendReadings(readings: Reading[]) {
    return api.post('/v1/metering_device/readings_seq', { needSave: true, readings });
  }
}

export default new MeteringDevicesService();
