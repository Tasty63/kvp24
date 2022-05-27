import MeteringDevicesService from './../services/MeteringDevicesService';
import { makeAutoObservable } from 'mobx';
import { MeteringDeviceInfo, MeteringDeviceValues, Reading } from '../../app.api';

class MeteringDevicesStore {
  meteringDevices: MeteringDeviceInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMeteringDevices(meteringDevices: MeteringDeviceInfo[]) {
    this.meteringDevices = meteringDevices;
  }

  async getMeteringDevices() {
    try {
      const meteringDevices = (await MeteringDevicesService.requestInfo()).data;
      this.setMeteringDevices(meteringDevices);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  async sendMeteringDevicesReadings(values: MeteringDeviceValues) {
    try {
      const readings: Reading[] = Object.entries(values).map((indication) => ({
        muId: parseInt(indication[0], 10),
        readings: parseInt(indication[1], 10),
      }));

      MeteringDevicesService.sendReadings(readings);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
}

export default MeteringDevicesStore;
