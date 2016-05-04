import _ from 'lodash';
import ownerTemplate from './owner_template.hbs';

const ownerContainer = document.getElementById('owners');

export default owners => {
  ownerContainer.innerHTML += _.map(owners, ownerTemplate).join('');
};
