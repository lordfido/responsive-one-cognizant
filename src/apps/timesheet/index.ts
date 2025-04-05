import { DEBUG_RECURSIVE } from '../../constants';
import { useAppInit } from '../../hooks';
import { createDebouncedInterval, log } from '../../utils';
import './timesheet';

const debounce = createDebouncedInterval();

const removeHardcodedHeights = () => {};

const removeHardcodedWidths = () => {};

const loadIframeCss = () => {
  const elem = document.querySelector(`iframe[src^="${location.origin}"]`);
  console.log('elem', location.href, elem);
}

const init = () => {
  useAppInit({
    frameName: 'timesheet',
    handleOnLoad: () => {
      loadIframeCss();

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
