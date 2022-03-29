export interface AuthResponse {
  access_token: string;
  expires_in: number;
  is_dispatch_enabled: boolean;
  is_eula_accepted: boolean;
  is_user_verified: boolean;
  jti: string;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface UserProfileResponse {
  address: string;
  contacts: UserContactInfo[];
  isAllowedRefuseTicket: boolean;
  isDispatchEnabled: boolean;
  isEmailSubscriptionsReadings: boolean;
  isEnvoy: boolean;
  isEulaAccepted: boolean;
  isNotificationsEnabled: boolean;
  isPaymentDocumentNotificationAllowed: boolean;
  isReadOnly: boolean;
  isUnauthorizedAccountingActive: boolean;
  isUnitedPaymentDocumentEnabled: boolean;
  isVerified: boolean;
  linkedAccounts: UserProfileLinkedAccount;
  serviceContract: UserContractInfo;
}

export interface UserContactInfo {
  contactType: string;
  isVerified: boolean;
  value: string;
}

export interface UserProfileLinkedAccount {
  address: string;
  contractNumber: string;
  name: string;
  urlAvatar: string;
}

export interface UserContractInfo {
  contractNumber: string;
  isOverhaul: boolean;
  managerialCompany: UserManagerialCompany;
}

export interface UserManagerialCompany {
  address: string;
  credit: number;
  debit: number;
  director: string;
  email: string;
  inn: string;
  legalAddress: string;
  name: string;
}

export type userInfo = {
  address: string;
  companyName: string;
  contractNumber: string;
};
