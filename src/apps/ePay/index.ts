import { DEBUG_RECURSIVE } from '../../constants';
import { useAppInit } from '../../hooks';
import { createDebouncedInterval, log } from '../../utils';
import './ePay';

const debounce = createDebouncedInterval();

const removeHardcodedHeights = () => {};

const removeHardcodedWidths = () => {};

const init = () => {
  useAppInit({
    frameName: 'ePay',
    handleOnLoad: () => {
      debounce(() => {
        if (DEBUG_RECURSIVE) {
          log('removeHardcodedSizes');
        }

        removeHardcodedHeights();
        removeHardcodedWidths();
      });
    }
  });
};

init();
