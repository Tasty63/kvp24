import { createContext } from 'react';
import UserInfoStore from './UserInfoStore';
import MeteringDevicesStore from './MeteringDevicesStore';
import AuthStore from './AuthStore';

const userInfoStore = new UserInfoStore();
const meteringDevicesStore = new MeteringDevicesStore();
const authStore = new AuthStore();

export const rootStore = {
  authStore,
  userInfoStore,
  meteringDevicesStore,
};

export const Context = createContext(rootStore);
