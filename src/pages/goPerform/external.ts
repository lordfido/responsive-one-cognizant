import {
  getFrameElement,
  getFrameInnerDocument,
  loadFile,
  log
} from '../../utils';
import { removeHardcodedSizes } from './common';

const useIframeJS = (doc: Document) => {
  log('Using iframe', doc);

  loadFile({
    doc,
    cssFileName: 'goPerform.css'
  });

  removeHardcodedSizes(doc);
};

const useDocumentJS = () => {
  const goPerformIFrame = getFrameElement('goPerform');

  if (goPerformIFrame) {
    log('Using root');

    window.open((goPerformIFrame as HTMLIFrameElement).src);
    getFrameElement('rootLink')?.click();
  }
}

const useGoPerformCode = () => {
  // If iframe's inner document is accessible
  const goPerformIframeDoc = getFrameInnerDocument('goPerform');
  log('goPerformIframeDoc', goPerformIframeDoc)
  
  if (goPerformIframeDoc) {
    useIframeJS(goPerformIframeDoc);
    return;
  }

  // If iframe is present but its inner document is not accessible
  const goPerformIFrame = getFrameElement('goPerform');
  log('goPerformIFrame', goPerformIFrame);
  if (goPerformIFrame) {
    useDocumentJS();
    return;
  }

  // Keep looking for goPerform app
  setTimeout(useGoPerformCode, 500);
}

export default useGoPerformCode;
