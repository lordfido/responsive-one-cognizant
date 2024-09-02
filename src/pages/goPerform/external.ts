import { useFrameCode } from '../../utils';
import { removeHardcodedSizes } from './common';

const useGoPerformCode = () => {
  useFrameCode({
    frameName: 'goPerform',
    useIframeJS: (doc: Document) => {
      removeHardcodedSizes(doc);
    }
  });
};

export default useGoPerformCode;
