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
