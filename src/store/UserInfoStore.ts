import UserService from './../services/UserService';
import { makeAutoObservable } from 'mobx';
import { userInfo } from '../../app.api';

class UserInfoStore {
  userInfo: userInfo = {
    address: '',
    companyName: '',
    contractNumber: '',
    isEulaAccepted: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUserInfo(address: string, companyName: string, contractNumber: string, isEulaAccepted: boolean) {
    this.userInfo = {
      address,
      companyName,
      contractNumber,
      isEulaAccepted,
    };
  }

  async getInfo() {
    try {
      const info = (await UserService.requestInfo()).data;
      this.setUserInfo(
        info.address,
        info.serviceContract.managerialCompany.name,
        info.serviceContract.contractNumber,
        info.isEulaAccepted
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
}

export default UserInfoStore;
