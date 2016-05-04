import $ from 'jQuery';
import _ from 'lodash';
import Handlebars from 'handlebars';

const ownerContainer = $('#owners');
const ownerSource = $('#ownerTemplate').html();
const ownerTemplate = Handlebars.compile(ownerSource);

export default owners => {
  _.forEach(owners, owner => {
    const ownerCompiled = ownerTemplate(owner);
    ownerContainer.append(ownerCompiled);
  });
};
