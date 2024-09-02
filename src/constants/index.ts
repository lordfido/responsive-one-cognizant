export * from './frames';
export * from './supportedApps';

export const DEBUG = process.env.NODE_ENV !== 'production';
export const DEBUG_RECURSIVE = DEBUG && false;
export const DELAY = 1000;
