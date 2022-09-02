import './style.scss';
require('./components/importstyle');
import { APPCONTAINERCLASS, BODYTAG } from './constants/app-constants';
import { create, qs } from './helper';

document.addEventListener('DOMContentLoaded', () => {
  let appTag = qs(`${APPCONTAINERCLASS}`);

  if (!appTag) {
    appTag = create('div', `${APPCONTAINERCLASS}`);

    qs(BODYTAG).insertAdjacentElement('afterbegin', appTag);
  }
});
