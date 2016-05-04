import http from 'http';
import _ from 'lodash';
import displayOwners from './display_owners';

const startAt = _.random(1, 5000);

http.get(`https://api.github.com/repositories?since=${startAt}`, res => {
  let data = '';

  res.on('data', buf => {
    data += buf;
  });

  res.on('end', () => {
    const repos = JSON.parse(data);
    const allOwners = _.map(repos, 'owner');
    const owners = _.uniqBy(allOwners, 'id');

    displayOwners(owners);
  })
});
