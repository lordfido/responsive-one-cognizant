import { getFrameElement, getFrameInnerDocument, log } from '../../utils';
import { loadAssociate360Css, removeHardcodedSizes } from './common';

const useIframeJS = (doc: Document) => {
  log('Using iframe', doc);

  loadAssociate360Css(doc);
  removeHardcodedSizes(doc);
};

const useDocumentJS = () => {
  const associate360IFrame = getFrameElement('associate360');

  if (associate360IFrame) {
    log('Using root');

    window.open((associate360IFrame as HTMLIFrameElement).src);
    getFrameElement('rootLink')?.click();
  }
};

const useAssociate360Code = () => {
  // If iframe's inner document is accessible
  const associate360IframeDoc = getFrameInnerDocument('associate360');
  log('associate360IframeDoc', associate360IframeDoc);

  if (associate360IframeDoc) {
    useIframeJS(associate360IframeDoc);
    return;
  }

  // If iframe is present but its inner document is not accessible
  const associate360IFrame = getFrameElement('associate360');
  log('associate360IFrame', associate360IFrame);
  if (associate360IFrame) {
    useDocumentJS();
    return;
  }

  // Keep looking for associate360 app
  setTimeout(useAssociate360Code, 500);
};

export default useAssociate360Code;
