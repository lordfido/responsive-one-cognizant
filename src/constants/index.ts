import { FrameConfig, SupportedApps } from '../types';

export const supportedApps: SupportedApps = {
  'One Cognizant': {
    icon: require('../assets/icons/cognizant_logo.png'),
    url: 'https://onecognizant.cognizant.com'
  },
  'Go Perform': {
    icon: require('../assets/icons/goPerform.png'),
    url: 'https://onecognizantbcazrapps.cognizant.com/2394'
  },
  'My Learning Studio': {
    icon: require('../assets/icons/myLearningStudio.png'),
    url: 'https://onecognizantazrapps.cognizant.com/1738'
  }
};

export const frames: FrameConfig[] = [
  {
    name: 'rootLink',
    selector: '.oneCbrand-logo'
  },
  {
    name: 'goPerform',
    selector: `iframe[src="${supportedApps['Go Perform'].url}"]`
  },
  {
    name: 'myLearningStudio',
    selector: `iframe[src="${supportedApps['My Learning Studio'].url}"]`
  }
];
