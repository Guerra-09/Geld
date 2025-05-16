import { Platform } from 'react-native';
import { env as mockEnv } from '../config/env.local';
import { env as devEnv } from '../config/env.dev';
import { env as prodEnv } from '../config/env.prod';

const getEnvironment = () => {
  const environment = process.env.EXPO_PUBLIC_ENVIRONMENT || 'dev'; // Desde app.json

  switch (environment) {
    case 'mock': return mockEnv;
    case 'prod': return prodEnv;
    default: return devEnv;
  }
};

export const env = getEnvironment();

export type Environment = {
  apiBaseUrl: string;
  useMocks: boolean;
  mockDelay: number;
};