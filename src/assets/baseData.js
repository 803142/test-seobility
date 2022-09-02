import infoJSON from './info.json';

const content = JSON.parse(JSON.stringify(infoJSON));

const baseData = {
  dayInfo: {},
  sortTypes: [
  ],
};


export { baseData, content };
