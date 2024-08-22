import { loadFile } from '../../utils';

const removeHardcodedHeights = (doc: Document) => {
  const router = doc.querySelector('#routerWrapper > div') as HTMLElement;
  if (router) {
    router.style.maxHeight = 'auto';
  }
};

const removeHardcodedWidths = (doc: Document) => {
  const routerWrapper = doc.querySelector('#routerWrapper') as HTMLElement;
  if (routerWrapper) {
    routerWrapper.style.width = '100%';
  }
};

let interval: NodeJS.Timeout;
export const removeHardcodedSizes = (doc: Document) => {
  clearInterval(interval);

  interval = setInterval(() => {
    removeHardcodedHeights(doc);
    removeHardcodedWidths(doc);
  }, 500);
};

export const loadMyLearningStudioCss = (doc: Document = document) => {
  loadFile({
    doc,
    cssFileName: 'myLearningStudio.css'
  });
};
