import { FrameName } from '../types';
import { getFrameElement, log } from '../utils';

export const useNewWindow = (frameName: FrameName) => {
  const frame = getFrameElement(frameName);
  log('useNewWindow', { frame, frameName });

  if (frame) {
    log(`Opening new window for <${frameName}>`);
    window.open((frame as HTMLIFrameElement).src);
    getFrameElement('rootLink')?.click();
  }
};
