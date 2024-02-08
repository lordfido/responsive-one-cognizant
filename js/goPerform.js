const removeHardcodedHeights = () => {
  const myTeamsTable = document.querySelector('#goals-supervisor > .second-table-container');
  if (myTeamsTable) {
    myTeamsTable.style.height = 'auto';
  }
  
  const myTeamsTableHeading = document.querySelector('#div_headerRow');
  if (myTeamsTableHeading) {
    myTeamsTableHeading.style.width = 'auto';
  }
  
  setTimeout(removeHardcodedHeights, 500)
};

const init = () => {
  const { root } = ROC.frameUtils.getFrameElements()

  const loadGoPerformCss = () => {
    ROC.cssUtils.loadFile(root, 'goPerform.css');
    removeHardcodedHeights();
  }

  root.onload = () => {
    loadGoPerformCss();
  }

  loadGoPerformCss();
};

const findROC = () => {
  if (!!window.ROC) {
    init();
  } else {
    setTimeout(findROC, 300);
  }
}

findROC();
