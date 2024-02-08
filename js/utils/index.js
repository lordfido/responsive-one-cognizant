function CssUtils() {
  this.loadFile = (element, cssFileName) => {
    if (element && cssFileName) {
      const link = document.createElement('link');
      link.href = chrome.runtime.getURL(`/css/${cssFileName}`);
      link.rel = 'stylesheet';
      link.type = 'text/css';

      const doc = element.contentDocument;
      const appendElement = element.head
        ?? element.body
        ?? doc?.head
        ?? doc?.body;
  
      if (!!appendElement?.append) {
        appendElement.append(link);
      }
    }
  };
}
const cssUtils = new CssUtils();

function FrameUtils() {
  const frames = [
    {
      name: 'root',
      selector: 'document',
    },
    {
      name: 'goPerform',
      selector: 'iframe[src="https://onecognizantbcazrapps.cognizant.com/2394"]',
    }
  ];

  this.getFrameElements = () => frames.reduce((aggr, curr) => {
    if (!aggr[curr.name]) {
      if (curr.selector === 'document') {
        aggr[curr.name] = document;
        return aggr;
      }
        
      const parent = curr.parent ? this.getFrameContent(curr.parent) : document;
      aggr[curr.name] = (parent ?? document).querySelector(curr.selector);
      return aggr;
    }

    return aggr;
  }, {});

  this.getFramesContent = () => frames.reduce((aggr, curr) => {
    if (!aggr[curr.name]) {
      const parent = curr.parent ? this.getFrameContent(curr.parent) : document;
      aggr[curr.name] = parent.querySelector(curr.selector)?.contentDocument;
    }

    return aggr;
  }, {});

  this.getFrameElement = (name) => {
    const frameConfig = frames.find(f => f.name === name);
    const parent = frameConfig.parent ? this.getFrameContent(frameConfig.parent) : document;
    return parent.querySelector(frameConfig.selector);
  };

  this.getFrameContent = (name) => this.getFrameElement(name)?.contentDocument;
}
const frameUtils = new FrameUtils();

window.ROC = {
  cssUtils,
  frameUtils,
}
