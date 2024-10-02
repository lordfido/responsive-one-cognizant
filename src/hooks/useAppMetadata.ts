import { supportedApps } from '../constants';
import { FrameName } from '../types';
import { log } from '../utils';

const removeFavicons = () => {
  document.querySelectorAll('link[rel~="icon"]').forEach((link) => {
    link.remove();
  });
};

export const useAppMetadata = (frameName: FrameName) => {
  log('useAppMetadata', { frameName });

  if (document) {
    const app = supportedApps[frameName];

    // Set title
    document.title = app.name;

    // Remove any previous favicons
    removeFavicons();

    // Set favicon
    const imgSrc = chrome.runtime.getURL(`/images/${frameName}.png`);

    const shortcut = document.createElement('link');
    shortcut.rel = 'shortcut icon';
    shortcut.href = imgSrc;

    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = imgSrc;
    favicon.type = 'image/x-icon';
    favicon.setAttribute('sizes', '16x16');

    // Remove previous viewport
    document.querySelector('meta[name="viewport"]')?.remove();

    // Set viewport
    const viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1, user-scalable=no';

    document.head.append(shortcut);
    document.head.append(favicon);
    document.head.append(viewport);
  }
};
