import { useFrameInit } from '../../utils';
import './associate360';
import { removeHardcodedSizes } from './common';

const init = () => {
  useFrameInit({
    frameName: 'associate360',
    handleOnLoad: () => {
      removeHardcodedSizes(document);
    }
  });
};

init();
