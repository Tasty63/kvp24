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
