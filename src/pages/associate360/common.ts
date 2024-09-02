import { loadFile } from '../../utils';

const removeHardcodedHeights = (doc: Document) => {};

const removeHardcodedWidths = (doc: Document) => {};

let interval: NodeJS.Timeout;
export const removeHardcodedSizes = (doc: Document) => {
  clearInterval(interval);

  interval = setInterval(() => {
    removeHardcodedHeights(doc);
    removeHardcodedWidths(doc);
  }, 500);
};

export const loadAssociate360Css = (doc: Document = document) => {
  loadFile({
    doc,
    cssFileName: 'associate360.css'
  });
};
