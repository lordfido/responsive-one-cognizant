import { useFrameCode } from '../../utils';
import { removeHardcodedSizes } from './common';

const useAssociate360Code = () => {
  useFrameCode({
    frameName: 'associate360',
    useIframeJS: (doc: Document) => {
      removeHardcodedSizes(doc);
    }
  });
};

export default useAssociate360Code;
