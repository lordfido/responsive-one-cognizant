import { FrameName } from '../types';

interface FrameConfig {
  name: FrameName;
  selector: string;
}

export const frames: FrameConfig[] = [
  {
    name: 'rootLink',
    selector: '.oneCbrand-logo'
  },
  {
    name: 'goPerform',
    selector: 'iframe[src="https://onecognizantbcazrapps.cognizant.com/2394"]'
  },
  {
    name: 'myLearningStudio',
    selector: 'iframe[src="https://onecognizantazrapps.cognizant.com/1738"]'
  }
];
