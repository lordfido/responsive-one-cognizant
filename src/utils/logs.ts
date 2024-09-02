import { DEBUG } from '../constants';

export const log = (...args: unknown[]) => {
  if (DEBUG) {
    console.log('[ROC]', ...args);
  }
};
