import dep3 from 'modules/dep3.js';
import dep4 from 'modules/dep4.js';

export default () => [
  'page2',
  ...dep3().map(x => ` ${x}`),
  ...dep4().map(x => ` ${x}`)
];