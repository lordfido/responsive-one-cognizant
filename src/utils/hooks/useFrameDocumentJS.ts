import { FrameName } from '../../types';
import { getFrameElement } from '../frameUtils';
import { log } from '../logs';

export const useFrameDocumentJS = (frameName: FrameName) => {
  const frame = getFrameElement(frameName);

  if (frame) {
    log('Using root');

    window.open((frame as HTMLIFrameElement).src);
    getFrameElement('rootLink')?.click();
  }
};
