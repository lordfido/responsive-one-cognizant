const debug = false;

export const log = (...args: unknown[]) => {
  if (debug) {
    console.log(...args);
  }
}
