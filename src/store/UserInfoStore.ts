import UserService from './../services/UserService';
import { makeAutoObservable } from 'mobx';
import { userInfo } from '../../app.api';

class UserInfoStore {
  userInfo: userInfo = {
    address: '',
    companyName: '',
    contractNumber: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUserInfo(address: string, companyName: string, contractNumber: string) {
    this.userInfo = {
      address,
      companyName,
      contractNumber,
    };
  }

  async getInfo() {
    try {
      const info = (await UserService.requestInfo()).data;
      this.setUserInfo(info.address, info.serviceContract.managerialCompany.name, info.serviceContract.contractNumber);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
}

export default UserInfoStore;
