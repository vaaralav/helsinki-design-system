import { Beacon, Disposer, Signal, SignalListener, SignalNamespace } from '../beacon/beacon';
import { NamespacedBeacon, createNamespacedBeacon } from '../beacon/signals';
import { OidcClient, oidcClientNamespace, OidcClientState } from './index';

export type StateChangeSignalPayload = { state: OidcClientState; previousState?: OidcClientState };
export type StateChangeSignalType = typeof stateChangeSignalType;
export type StateChangeSignal = {
  type: StateChangeSignalType;
  namespace: SignalNamespace;
  payload: StateChangeSignalPayload;
  context: OidcClient;
};
export const stateChangeSignalType = 'stateChange' as const;

export function createStateChangeTrigger(): Pick<Signal, 'namespace'> & { type: StateChangeSignalType } {
  return {
    type: stateChangeSignalType,
    namespace: oidcClientNamespace,
  };
}

export function addStateChangeSignalListener(beacon: Beacon, listener: (signal: StateChangeSignal) => void): Disposer {
  const trigger = createStateChangeTrigger();
  return beacon.addListener(trigger, listener as SignalListener);
}

export function createOidcClientBeacon(): NamespacedBeacon & {
  emitStateChange: (payload: StateChangeSignalPayload) => void;
} {
  const dedicatedBeacon = createNamespacedBeacon(oidcClientNamespace);
  return {
    ...dedicatedBeacon,
    emitStateChange: (payload: StateChangeSignalPayload) => {
      dedicatedBeacon.emit(stateChangeSignalType, payload);
    },
  };
}
