(function($, _, displayOwners) {
  const startAt = _.random(1, 5000);

  $.get(`https://api.github.com/repositories?since=${startAt}`, repos => {
    const allOwners = _.map(repos, 'owner');
    const owners = _.uniqBy(allOwners, 'id');

    console.log(owners);

    displayOwners(owners);
  });
})(jQuery, _, displayOwners);
