import { useFrameInit } from '../../utils';
import { removeHardcodedSizes } from './common';
import './goPerform';

const init = () => {
  useFrameInit({
    frameName: 'goPerform',
    handleOnLoad: () => {
      removeHardcodedSizes(document);
    }
  });
};

init();
