type AppName =
  | 'associate360'
  | 'ePay'
  | 'goPerform'
  | 'liveSupport'
  | 'myLearningStudio'
  | 'peopleSoft'
  | 'timesheet';

export type FrameName = AppName | 'rootLink';

export interface FrameConfig {
  name: FrameName;
  selector: string;
}

export interface SupportedApp {
  icon: string;
  name: string;
  url: string;
}

export type SupportedApps = Record<FrameName, SupportedApp>;
