import { supportedApps } from '../../constants';
import { RenderListProps } from './types';
import './popup.scss';
import { log } from '../../utils';

const renderListItem = (
  { icon, id, name, url }: RenderListProps,
  parent: HTMLElement
) => {
  log('renderListItem', id);
  const wrapper = document.createElement('div');
  wrapper.id = id;
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
  log('renderList');
  const wrapper = document.createElement('div');
  wrapper.classList.add('List');

  Object.entries(supportedApps).forEach(([id, { icon, name, url }]) => {
    renderListItem({ icon, id, name, url }, wrapper);
  });

  const root = document.getElementById('root');
  root?.appendChild(wrapper);
};

renderList();
