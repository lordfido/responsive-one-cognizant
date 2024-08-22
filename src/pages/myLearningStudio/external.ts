import { getFrameElement, getFrameInnerDocument, log } from '../../utils';
import { loadMyLearningStudioCss, removeHardcodedSizes } from './common';

const useIframeJS = (doc: Document) => {
  log('Using iframe', doc);

  loadMyLearningStudioCss(doc);
  removeHardcodedSizes(doc);
};

const useDocumentJS = () => {
  const myLearningStudioIFrame = getFrameElement('myLearningStudio');

  if (myLearningStudioIFrame) {
    log('Using root');

    window.open((myLearningStudioIFrame as HTMLIFrameElement).src);
    getFrameElement('rootLink')?.click();
  }
};

const useMyLearningStudioCode = () => {
  // If iframe's inner document is accessible
  const myLearningStudioIframeDoc = getFrameInnerDocument('myLearningStudio');
  log('myLearningStudioIframeDoc', myLearningStudioIframeDoc);

  if (myLearningStudioIframeDoc) {
    useIframeJS(myLearningStudioIframeDoc);
    return;
  }

  // If iframe is present but its inner document is not accessible
  const myLearningStudioIFrame = getFrameElement('myLearningStudio');
  log('myLearningStudioIFrame', myLearningStudioIFrame);
  if (myLearningStudioIFrame) {
    useDocumentJS();
    return;
  }

  // Keep looking for myLearningStudio app
  setTimeout(useMyLearningStudioCode, 500);
};

export default useMyLearningStudioCode;
