import { DEBUG_RECURSIVE } from '../../constants';
import { useAppInit } from '../../hooks';
import { createDebouncedInterval, log } from '../../utils';
import './myLearningStudio';

const debounce = createDebouncedInterval();

const removeHardcodedHeights = () => {
  const router = document.querySelector('#routerWrapper > div') as HTMLElement;
  if (router) {
    router.style.maxHeight = 'auto';
  }
};

const removeHardcodedWidths = () => {
  const routerWrapper = document.querySelector('#routerWrapper') as HTMLElement;
  if (routerWrapper) {
    routerWrapper.style.width = '100%';
  }
};

const init = () => {
  useAppInit({
    frameName: 'myLearningStudio',
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
