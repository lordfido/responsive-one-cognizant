import { useFrameCode } from '../../utils';
import { removeHardcodedSizes } from './common';

const useMyLearningStudioCode = () => {
  useFrameCode({
    frameName: 'myLearningStudio',
    useIframeJS: (doc: Document) => {
      removeHardcodedSizes(doc);
    }
  });
};

export default useMyLearningStudioCode;
