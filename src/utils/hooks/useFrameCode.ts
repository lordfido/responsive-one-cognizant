import { FrameName } from '../../types';
import { loadFile } from '../cssUtils';
import { getFrameElement, getFrameInnerDocument } from '../frameUtils';
import { log } from '../logs';
import { useFrameDocumentJS } from './useFrameDocumentJS';

interface Props {
  frameName: FrameName;
  useIframeJS: (doc: Document) => void;
}

export const useFrameCode = ({ frameName, useIframeJS }: Props) => {
  // If iframe's inner document is accessible
  const iframeDoc = getFrameInnerDocument(frameName);
  log('iframeDoc', iframeDoc);

  if (iframeDoc) {
    log('Using iframe', iframeDoc);

    loadFile({
      doc: iframeDoc,
      cssFileName: `${frameName}.css`
    });

    useIframeJS(iframeDoc);
    return;
  }

  // If iframe is present but its inner document is not accessible
  const goPerformIFrame = getFrameElement(frameName);
  log('goPerformIFrame', goPerformIFrame);
  if (goPerformIFrame) {
    useFrameDocumentJS(frameName);
    return;
  }

  // Keep looking for goPerform app
  setTimeout(() => {
    useFrameCode({ frameName, useIframeJS });
  }, 500);
};
