
const supportedApps = {
  'One Cognizant': {
    icon: '../../assets/icons/cognizant_logo.svg',
    url: 'https://onecognizant.cognizant.com',
  },
  'Go Perform': {
    icon: '../../assets/icons/goPerform.png',
    url: 'https://onecognizantbcazrapps.cognizant.com/2394',
  },
  'Learning Studio': {
    icon: '../../assets/icons/myLearningStudio.png',
    url: 'https://onecognizantazrapps.cognizant.com/1738',
  },
};

const renderListItem = ({ icon, name, url }, parent) => {
  const wrapper = document.createElement('div');
  wrapper.id = name;
  wrapper.classList.add('List__Item', 'Item');
  wrapper.onclick = () => {
    if (chrome.tabs) {
      chrome.tabs.create({ url });
      return;
    }
    
    window.open(url);
  };

  const img = document.createElement('img');
  img.classList.add('Item__Icon');
  img.src= icon;

  const desc = document.createElement('div');
  desc.classList.add('Item__Description');
  desc.innerText = name;

  wrapper.appendChild(img);
  wrapper.appendChild(desc);
  parent.appendChild(wrapper);
}

const renderList = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('List');

  Object.entries(supportedApps).forEach(([name, { icon, url }]) => {
    renderListItem({ icon, name, url }, wrapper);
  });

  const root = document.querySelector('#root');
  root.appendChild(wrapper);
};

renderList();
