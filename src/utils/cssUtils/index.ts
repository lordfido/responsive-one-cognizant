import { log } from '../logs';

interface IsFileLoadedParams {
  file: string;
  element: HTMLHeadElement | HTMLBodyElement;
}

const isFileLoaded = ({ element, file }: IsFileLoadedParams): boolean => {
  const childNodes = Array.from(element.childNodes);

  return (childNodes as HTMLLinkElement[]).some(
    (c) =>
      c.tagName === 'LINK' &&
      c.hasAttribute?.('href') &&
      c.getAttribute?.('href') === file
  );
};

interface LoadFileParams {
  cssFileName: string;
  doc?: Document;
}

export const loadFile = ({
  cssFileName,
  doc = document
}: LoadFileParams): void => {
  const link = doc.createElement('link');
  link.href = chrome.runtime.getURL(`/css/${cssFileName}`);
  link.rel = 'stylesheet';
  link.type = 'text/css';

  const elementToAppendTo = doc?.head ?? doc?.body;

  if (
    !!elementToAppendTo?.append &&
    !isFileLoaded({ element: elementToAppendTo, file: link.href })
  ) {
    log('loadFile', link.href);
    elementToAppendTo.append(link);
  }
};
