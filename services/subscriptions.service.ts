import { subscriptionMock } from '@/mocks/subscriptionts.mock';
import { env } from '../constants/Environment';

export const fetchSubscriptions = async () => {
  if (env.useMocks) {
    return new Promise(resolve => 
      setTimeout(() => resolve(subscriptionMock), env.mockDelay)
    );
  }

  const response = await fetch(`${env.apiBaseUrl}/subscriptions`);
  return response.json();
};
