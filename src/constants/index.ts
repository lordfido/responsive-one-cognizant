import { FrameName } from '../types';

interface FrameConfig {
  name: FrameName;
  selector: string;
}

export const frames = [
  {
    name: 'rootLink',
    selector: '.oneCbrand-logo'
  },
  {
    name: 'goPerform',
    selector: 'iframe[src="https://onecognizantbcazrapps.cognizant.com/2394"]',
  }
] as FrameConfig[];
