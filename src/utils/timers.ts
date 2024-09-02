import { DEBUG, DELAY } from '../constants';
import { log } from './logs';

type CallbackFn = () => void;

export const createDebouncedInterval = (timeout = DELAY, debug = DEBUG) => {
  if (debug) {
    log('createDebouncedInterval', timeout);
  }

  let debounceInterval: NodeJS.Timeout;

  const debounceFn = (fn: CallbackFn): void => {
    clearInterval(debounceInterval);
    debounceInterval = setInterval(fn, timeout);
  };

  return debounceFn;
};

export const createDelay = (timeout = DELAY, debug = false) => {
  if (debug) {
    log('createDelay', timeout);
  }

  return (fn: CallbackFn): NodeJS.Timeout => {
    return setTimeout(fn, timeout);
  };
};
