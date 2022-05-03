import MeteringDevicesService from './../services/MeteringDevicesService';
import { makeAutoObservable } from 'mobx';
import { MeteringDevice, MeteringDeviceInfo } from '../../app.api';

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
      //console.log(meteringDevices.map((a) => a.id));
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
}

export default MeteringDevicesStore;
