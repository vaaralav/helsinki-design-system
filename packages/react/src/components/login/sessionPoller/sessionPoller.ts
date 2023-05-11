import { UserManager } from 'oidc-client-ts';
import HttpStatusCode from 'http-status-typed';

import createHttpPoller from '../utils/httpPoller';
import { createFetchAborter } from '../utils/abortFetch';
import { Signal, ConnectedModule } from '../beacon/beacon';
import { createNamespacedBeacon, createTriggerForAllSignals } from '../beacon/signals';
import { SessionPollerError } from './sessionPollerError';
import { OidcClientState, oidcClientNamespace } from '../client/index';
import { getOidcClientFromSignal, getOidcClientStateChangePayload } from '../client/signals';

export interface SessionPoller extends ConnectedModule {
  start: () => void;
  stop: () => void;
}

export type SessionPollerOptions = {
  pollIntervalInMs: number;
};

export const sessionPollerNamespace = 'sessionPoller';

export default function createSessionPoller(
  options: SessionPollerOptions = { pollIntervalInMs: 60000 },
): SessionPoller {
  const { pollIntervalInMs } = options;
  const fetchCanceller = createFetchAborter();
  let userManager: UserManager | undefined;
  let currentState: OidcClientState | undefined;
  const dedicatedBeacon = createNamespacedBeacon(sessionPollerNamespace);

  const storeUserManagerFromSignal = (signal: Signal): void => {
    if (userManager) {
      return;
    }
    const oidcClient = getOidcClientFromSignal(signal);
    if (oidcClient) {
      userManager = oidcClient.getUserManager();
    }
  };
  const storeStateChangeFromSignal = (signal: Signal): boolean => {
    const previousState = currentState;
    const payload = getOidcClientStateChangePayload(signal);
    if (payload) {
      currentState = payload.state;
    } else if (!currentState) {
      const oidcClient = getOidcClientFromSignal(signal);
      if (oidcClient) {
        currentState = oidcClient.getState();
      }
    }
    return currentState !== previousState;
  };
  const userInfoFetchFunction = async (): Promise<Response | undefined> => {
    if (!userManager) {
      return Promise.resolve(undefined);
    }
    const uri = await userManager.metadataService.getUserInfoEndpoint();
    const user = await userManager.getUser();
    const accessToken = user && user.access_token;
    if (!accessToken) {
      return Promise.reject(new Error('Access token not set'));
    }
    const headers = new Headers();
    headers.append('authorization', `Bearer ${accessToken}`);
    return fetch(uri, {
      method: 'GET',
      headers,
      signal: fetchCanceller.getSignal(),
    });
  };

  const shouldPoll = () => currentState === 'VALID_SESSION';

  const poller = createHttpPoller({
    pollIntervalInMs,
    pollFunction: userInfoFetchFunction,
    shouldPoll,
    onError: (returnedHttpStatus) => {
      if (fetchCanceller.isAborted()) {
        return { keepPolling: false };
      }
      if (
        returnedHttpStatus &&
        (returnedHttpStatus === HttpStatusCode.FORBIDDEN || returnedHttpStatus === HttpStatusCode.UNAUTHORIZED)
      ) {
        dedicatedBeacon.emitError(
          new SessionPollerError('User session poller returned FORBIDDEN or UNAUTHORIZED', 'SESSION_ENDED'),
        );
        return { keepPolling: false };
      }
      dedicatedBeacon.emitError(new SessionPollerError('User session poller failed', 'SESSION_POLLING_FAILED'));
      return { keepPolling: shouldPoll() };
    },
  });

  const start = () => {
    poller.start();
  };
  const stop = () => {
    fetchCanceller.abort();
    poller.stop();
  };

  const oidcClientListener = (signal: Signal) => {
    storeUserManagerFromSignal(signal);
    const stateChanged = storeStateChangeFromSignal(signal);
    if (stateChanged && currentState === 'VALID_SESSION') {
      start();
    } else if (currentState !== 'VALID_SESSION') {
      stop();
    }
  };

  dedicatedBeacon.addListener(createTriggerForAllSignals(oidcClientNamespace), oidcClientListener);

  const sessionPoller: SessionPoller = {
    namespace: sessionPollerNamespace,
    start,
    stop,
    connect: (beacon) => {
      dedicatedBeacon.storeBeacon(beacon);
    },
  };
  return sessionPoller;
}
