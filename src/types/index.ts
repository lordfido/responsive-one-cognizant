export type FrameName = 'rootLink' | 'goPerform' | 'myLearningStudio';

export interface FrameConfig {
  name: FrameName;
  selector: string;
}

export interface SupportedApp {
  icon: string;
  url: string;
}

export type SupportedApps = Record<string, SupportedApp>;
