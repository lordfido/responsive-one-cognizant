const removeHardcodedHeights = (doc: Document) => {
  const myTeamsTable = doc.querySelector(
    '#goals-supervisor > .second-table-container'
  ) as HTMLElement;
  if (myTeamsTable) {
    myTeamsTable.style.height = 'auto';
  }

  const myTeamsTableHeading = doc.querySelector(
    '#div_headerRow'
  ) as HTMLElement;
  if (myTeamsTableHeading) {
    myTeamsTableHeading.style.width = 'auto';
  }

  const homeManagersCommentsHeading = doc.querySelector(
    'div#body > section > div[role=main] > .main #yea .contentYeaBefore > .supervisorCmtsAssociate > .supervisorCmtsAssHead > font'
  ) as HTMLElement;
  if (homeManagersCommentsHeading) {
    homeManagersCommentsHeading.style.paddingLeft = '0';
  }
};

const removeHardcodedWidths = (doc: Document) => {
  const keyContributionsTable = doc.querySelector(
    '#interim_check_in .feedback_position > .keyContribution > .keyContent'
  ) as HTMLElement;
  if (keyContributionsTable) {
    keyContributionsTable.style.width = 'auto';
  }
};

let interval: NodeJS.Timeout;
export const removeHardcodedSizes = (doc: Document) => {
  clearInterval(interval);

  interval = setInterval(() => {
    removeHardcodedHeights(doc);
    removeHardcodedWidths(doc);
  }, 500);
};
