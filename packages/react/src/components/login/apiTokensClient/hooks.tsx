import { useMemo } from 'react';

import { useBeacon, useOidcClient } from '../hooks';
import { apiTokensClientNamespace, ApiTokenClient, TokenData } from './index';
import { ApiTokensClientError } from './apiTokensClientError';

type UseApiTokensHookReturnType = {
  getStoredApiTokens: () => [ApiTokensClientError | null, TokenData | null];
  isRenewing: () => boolean;
};

export const useApiTokensClient = (): ApiTokenClient => {
  const { getModule } = useBeacon();
  const apiTokensClient = getModule<ApiTokenClient>(apiTokensClientNamespace);
  if (!apiTokensClient) {
    throw new Error('Cannot find apiTokensClient from LoginContext.');
  }
  return apiTokensClient;
};

export const useApiTokens = (): UseApiTokensHookReturnType => {
  const apiTokensClient = useApiTokensClient();
  const oidcClient = useOidcClient();

  const returnObj = useMemo<UseApiTokensHookReturnType>(() => {
    const checkIfApiTokensCanExist = () => {
      if (!oidcClient.isAuthenticated()) {
        return new ApiTokensClientError('User is not authenticated', 'INVALID_USER_FOR_API_TOKENS');
      }
      return null;
    };
    return {
      getStoredApiTokens: () => {
        const possibleError = checkIfApiTokensCanExist();
        if (possibleError) {
          return [possibleError, null];
        }
        return [null, apiTokensClient.getTokens()];
      },
      isRenewing: () => {
        const possibleError = checkIfApiTokensCanExist();
        if (possibleError) {
          return false;
        }
        return apiTokensClient.isRenewing();
      },
    };
  }, [apiTokensClient]);
  return returnObj;
};
