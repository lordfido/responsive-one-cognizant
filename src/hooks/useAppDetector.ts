import { DEBUG_RECURSIVE } from '../constants';
import { FrameName } from '../types';
import { createDelay, getFrameElement, log } from '../utils';
import { useNewWindow } from './useNewWindow';

export const useAppDetector = (frameName: FrameName) => {
  // Keep looking for the current app
  const delay = createDelay(undefined);
  delay(() => {
    useAppDetector(frameName);
  });

  // If iframe is present but its inner document is not accessible
  const iframe = getFrameElement(frameName);
  if (DEBUG_RECURSIVE) {
    log('useAppDetector', { frameName, iframe });
  }

  if (iframe) {
    useNewWindow(frameName);
    return;
  }
};
