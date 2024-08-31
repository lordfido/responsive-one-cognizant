import { supportedApps } from '../../constants';
import { RenderListProps } from './types';
import './popup.scss';

const renderListItem = (
  { icon, name, url }: RenderListProps,
  parent: HTMLElement
) => {
  const wrapper = document.createElement('div');
  wrapper.id = name;
  wrapper.classList.add('List__Item', 'Item');
  wrapper.onclick = () => {
    if (window.chrome.tabs) {
      window.chrome.tabs.create({ url });
      return;
    }

    window.open(url);
  };

  const img = document.createElement('img');
  img.classList.add('Item__Icon');
  img.src = icon;

  const desc = document.createElement('div');
  desc.classList.add('Item__Description');
  desc.innerText = name;

  wrapper.appendChild(img);
  wrapper.appendChild(desc);
  parent.appendChild(wrapper);
};

const renderList = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('List');

  Object.entries(supportedApps).forEach(([name, { icon, url }]) => {
    renderListItem({ icon, name, url }, wrapper);
  });

  const root = document.getElementById('root');
  root?.appendChild(wrapper);
};

renderList();
