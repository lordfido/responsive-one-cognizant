import { DEBUG_RECURSIVE } from '../../constants';
import { useAppInit } from '../../hooks';
import { createDebouncedInterval, log } from '../../utils';
import './goPerform';

const debounce = createDebouncedInterval();

const removeHardcodedHeights = () => {
  const myTeamsTable = document.querySelector(
    '#goals-supervisor > .second-table-container'
  ) as HTMLElement;
  if (myTeamsTable) {
    myTeamsTable.style.height = 'auto';
  }

  const myTeamsTableHeading = document.querySelector(
    '#div_headerRow'
  ) as HTMLElement;
  if (myTeamsTableHeading) {
    myTeamsTableHeading.style.width = 'auto';
  }

  const homeManagersCommentsHeading = document.querySelector(
    'div#body > section > div[role=main] > .main #yea .contentYeaBefore > .supervisorCmtsAssociate > .supervisorCmtsAssHead > font'
  ) as HTMLElement;
  if (homeManagersCommentsHeading) {
    homeManagersCommentsHeading.style.paddingLeft = '0';
  }
};

const removeHardcodedWidths = () => {
  const keyContributionsTable = document.querySelector(
    '#interim_check_in .feedback_position > .keyContribution > .keyContent'
  ) as HTMLElement;
  if (keyContributionsTable) {
    keyContributionsTable.style.width = 'auto';
  }
};

const init = () => {
  useAppInit({
    frameName: 'goPerform',
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
