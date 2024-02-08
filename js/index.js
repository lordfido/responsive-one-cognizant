const getRootLink = () => document.querySelector('.oneCbrand-logo');

const navigateToGoPerform = () => {
  const goPerformIFrame = ROC.frameUtils.getFrameElement('goPerform');
  if (goPerformIFrame) {
    window.open(goPerformIFrame.src);
    getRootLink()?.click();
  }
    
  setTimeout(navigateToGoPerform, 500);
}

const init = () => {
  const { root } = ROC.frameUtils.getFrameElements();
  ROC.cssUtils.loadFile(root, 'index.css');

  navigateToGoPerform();
}

const findROC = () => {
  if (!!window.ROC) {
    init();
  } else {
    setTimeout(findROC, 300);
  }
}

findROC();
