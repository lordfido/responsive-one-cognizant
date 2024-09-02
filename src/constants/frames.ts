import { FrameConfig } from '../types';
import { supportedApps } from './supportedApps';

export const frames: FrameConfig[] = [
  {
    name: 'rootLink',
    selector: '.oneCbrand-logo'
  },
  {
    name: 'associate360',
    selector: `iframe[src="${supportedApps['associate360'].url}"]`
  },
  {
    name: 'goPerform',
    selector: `iframe[src="${supportedApps['goPerform'].url}"]`
  },
  {
    name: 'myLearningStudio',
    selector: `iframe[src="${supportedApps['myLearningStudio'].url}"]`
  }
];
