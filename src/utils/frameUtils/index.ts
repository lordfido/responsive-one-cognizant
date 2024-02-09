import { frames } from '../../constants';
import { FrameName } from '../../types';

export const getFrameElement = (name: FrameName): HTMLElement | null => {
  const frameConfig = frames.find(f => f.name === name);
  return frameConfig ? document?.querySelector(frameConfig.selector) : null;
};

export const getFrameInnerDocument = (name: FrameName): Document | null => {
  const frameElement = getFrameElement(name);
  const doc = (frameElement as HTMLFrameElement)?.contentDocument;

  if (doc?.location.href !== 'about:blank') {
    return doc;
  }

  return null;
}
