import { frames } from '../../constants';
import { FrameName } from '../../types';

export const getFrameElement = (name: FrameName): HTMLElement | null => {
  const frameConfig = frames.find((f) => f.name === name);
  return frameConfig ? document?.querySelector(frameConfig.selector) : null;
};
