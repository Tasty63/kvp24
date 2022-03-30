import { AxiosRequestConfig } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfigOptional extends AxiosRequestConfig {
    _isRetry?: boolean;
  }
}
